
import mongoose from "mongoose";
import {createHmac  , randomBytes} from 'crypto' 

const UserScheam = new mongoose.Schema({
    name : {
        type : String,
        required :  true
    },
    phoneNumber : {
        type : String,
        required :  true,
        unique : true
    },
    salt : {
        type : String
    },
    password : {
        type : String,
        required : true
    },
    role : {
        type : String,
        enum : ['ADMIN' , 'USER'],
        default : 'USER'
    }
});


UserScheam.pre('save', function (next) {
    const admin = this

    const salt = randomBytes(8).toString('hex')
    const password = createHmac('sha256', salt)
        .update(admin.password)
        .digest('hex');
    this.salt = salt;
    this.password = password
    next()
})

UserScheam.static('matchpassword', async function ( phoneNumber, password , req) {
    const user = await this.findOne({ phoneNumber: phoneNumber })

    if (!user) throw "User Not Found"

    const generatedPassword = createHmac('sha256', user.salt)
        .update(password)
        .digest('hex');

    if (generatedPassword !== user.password) throw "Incorrect password";
    return user
})


UserScheam.static('resetpassword' , async function (phoneNumber , newpassword , id) {
    const salt = randomBytes(8).toString('hex');
    const generatedpassword = createHmac('sha256', salt)
        .update(newpassword)
        .digest('hex');

    const result = await this.findOneAndUpdate({phoneNumber : phoneNumber} , {password : generatedpassword , salt : salt})
    if(!result) throw "Error in Chnaging Password"
    return "Password Chnaged Sucessfully"
})


export const user = mongoose.model('user' , UserScheam);