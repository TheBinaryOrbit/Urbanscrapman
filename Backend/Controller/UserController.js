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
        const data = req.body
        if (!req.body || !req.body.phoneNumber || !req.body.password) return res.status(400).json({ error: "All fields Are required" });
        const result = await user.matchpassword(data.phoneNumber, data.password);

        if (!result) return res.status(404).json({"Error" : "User not Found"})

        const token = generateToken(result.phoneNumber, result._id, result.role); // Generatin the Jwt tokern

        return res.status(200).json({ token: token, name: result.name, phoneNumber: result.phoneNUmber, role: result.role, id: result._id });
    } catch (e) {
        console.log(e);
        return res.status(400).json({ error: "not found" });
    }
}

export const resetpassword =async (req, res) => {
    try{
        if(!req.body || !req.body.sessionid || !req.body.otp || !req.body.newPassword  || !req.body.phoneNumber)  return res.status(400).json({"Error" : "All Fields Are Required"});

        const otpres = await verifyOpt(req.body.sessionid , req.body.otp)
        if(!(otpres === "Matched")) return res.status(403).json({"Erro" : "Invalid OTP"});
        console.log("verified")
        const result = await user.resetpassword(req.body.phoneNumber , req.body.newPassword)
        if(result == "Password Chnaged Sucessfully") return res.status(200).json({"Message" : "Password Changed Sucesfully"});
    }catch(e){
        console.log(e)
        return res.status(500).json({"Error" : "Someting Went Wrong"})
    }
}

export const GetOtp = async (req, res) => {
    try {
        const apikey = process.env.OTP_API
        if (!req.body || !req.body.phoneNumber) return res.status(400).json({ "Error": "All Fields Are Required" });
        try {
            const response = await axios.get(`https://2factor.in/API/V1/${apikey}/SMS/+91${req.body.phoneNumber}/AUTOGEN3`);
            if (response.status == 200) return res.status(200).json(response.data);

            return res.status(400).json({ "Error": "Bad request" });
        } catch (e) {
            console.log(e);
            return res.status(500).json({ 'Error': "OTP server Error" })
        }
    } catch (e) {
        console.log(e);
        return res.status(500).json({ 'Error': "Somthing Went Wrong" })
    }
}

const verifyOpt = async (sessionid , otp) => {
    try {
        const apikey = process.env.OTP_API
        const response = await axios.get(`https://2factor.in/API/V1/${apikey}/SMS/VERIFY/${sessionid}/${otp}`);
        console.log(response.data)
        if (response.status == 200) return "Matched"
        return "Not Matched"
    } catch (e) {
        console.log(e)
        console.log("not matched");
        return "Not Matched"
    }

}
