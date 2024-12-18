import axios from "axios";
import { user } from "../Modal/User.js";
import 'dotenv/config'
import { generateToken } from "../Authtoken/jwt.js";


export const handleSingUp = async (req, res) => {
    try {
        
        if (!req.body || !req.body.phoneNumber || !req.body.password || !req.body.name) return res.status(400).json({ "Error": "All fileds are required" });
        const result = await user.create(req.body)

        if (!result) return res.status(400).json({ "Error": "Failde to create account" })
        return res.status(201).json({ Message: "Account Created Sucessfully" })
    } catch (e) {
        console.log(e)
        if (e.code == 11000) {
            return res.status(400).json({ error: "Account Alearady Exist" })
        }
        return res.status(500).json({ error: "Internal Server Error" })
    }
}


export const handleLogin = async (req, res) => {
    try {
        
        if (!req.body || !req.body.phoneNumber || !req.body.password) return res.status(400).json({ error: "All fields Are required" });
        const result = await user.matchpassword(req.body.phoneNumber, req.body.password);

        if (!result) return res.status(404).json({error : "User not Found"})

        const token = generateToken(result.phoneNumber, result._id, result.role); // Generatin the Jwt tokern

        return res.status(200).json({ token: token, name: result.name, phoneNumber: result.phoneNumber, role: result.role, id: result._id});
    } catch (e) {
        console.log(e);
        return res.status(400).json({ error: e });
    }
}

export const resetpassword =async (req, res) => {
    try{
        if(!req.body || !req.body.sessionid || !req.body.otp || !req.body.newPassword  || !req.body.phoneNumber)  return res.status(400).json({"Error" : "All Fields Are Required"});

        const otpres = await verifyOpt(req.body.sessionid , req.body.otp)
        if(!(otpres === "Matched")) return res.status(401).json({"error" : "Invalid OTP"});
        
        const result = await user.resetpassword(req.body.phoneNumber , req.body.newPassword)
        if(result == "Password Chnaged Sucessfully") return res.status(200).json({"Message" : "Password Changed Sucesfully"});
    }catch(e){
        console.log(e)
        return res.status(500).json({"error" : "Someting Went Wrong"})
    }
}

export const GetOtp = async (req, res) => {
    try {
        const apikey = process.env.OTP_API
        
        if (!req.body || !req.body.phoneNumber) return res.status(400).json({ "Error": "All Fields Are Required" });
        try {
            const result = await user.findOne({phoneNumber : req.body.phoneNumber})
            if(!result) return res.status(404).json({"error" : "User Dosen't Exist"})

            const response = await axios.get(`https://2factor.in/API/V1/${apikey}/SMS/+91${req.body.phoneNumber}/AUTOGEN3`);
            if (response.status == 200) return res.status(200).json(response.data);

            return res.status(400).json({ "error": "Bad request" });
        } catch (e) {
            console.log(e);
            return res.status(500).json({ 'error': "OTP server Error" })
        }
    } catch (e) {
        console.log(e);
        return res.status(500).json({ 'error': "Somthing Went Wrong" })
    }
}

const verifyOpt = async (sessionid , otp) => {
    try {
        const apikey = process.env.OTP_API
        const response = await axios.get(`https://2factor.in/API/V1/${apikey}/SMS/VERIFY/${sessionid}/${otp}`);
        
        if (response.status == 200) return "Matched"
        return "Not Matched"
    } catch (e) {
        console.log(e)
        return "Not Matched"
    }

}
