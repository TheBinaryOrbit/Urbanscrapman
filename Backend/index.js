import express from 'express'
import 'dotenv/config'
import { ConnectDB } from './Database/Dbconnection.js'
import { route as SheduleRouter } from './Router/SheduleRouter.js'
import { route as ScrabRouter } from './Router/Scrabrouter.js'
import { route as UserRouter } from './Router/UserRouter.js'
const PORT = process.env.PORT

const app = express()


app.get('/' , (req,res)=>{   
    res.json({"mess" : "Happy Backend"});
})

app.use(express.urlencoded({ extended : false}));
app.use(express.json());


app.use('/api/v1/urbanscrapman/shedule' , SheduleRouter);
app.use('/api/v1/urbanscrapman/scrab' , ScrabRouter);
app.use('/api/v1/urbanscrapman/user' , UserRouter);



ConnectDB(process.env.DBURL)

app.listen( PORT ,()=>{
    console.log(`Server Started ${PORT}`)
})