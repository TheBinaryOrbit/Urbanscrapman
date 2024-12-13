import express from 'express'
import { GetOtp, handleLogin, handleSingUp, resetpassword } from '../Controller/UserController.js';
export const route = express.Router();


route.post('/getotp' , GetOtp)
route.post('/resetpassword' , resetpassword)
route.post('/singup' , handleSingUp)
route.post('/login' , handleLogin)

