import { shedule } from "../Modal/Shedule.js";

export const CreateShedule = async (req,res)=>{
    try{
        console.log(req.body)
        if(!req.body || !req.body.weight ||!req.body.pickUpDate || !req.body.timeSlot || !req.body.address || !req.body.pinCode || !req.body.landMark) return res.status(400).json({"error" :  "All fields are required"});
        const result = await shedule.create(req.body);

        if(!result) return res.status(400).json({ "error"  : "Error in Create shedule"});
        return res.status(201).json({"Message" : "Sheduled a pickup Sucessfully"});
    }catch(e){
        console.log(e)
        return res.status(500).json({ "error"  : "Error in Create shedule"});
    }
}

export const UpdateStatus = async (req,res)=>{
    try{
        const id = req.params.id
        const result  = await shedule.findByIdAndUpdate(id , {status : "Completed"})

        if(!result) return res.status(404).json({ "error"  :"Pickup Not Found"});
        return res.status(200).json({"Message" : "Pickup Updated Sucessfully"});

    }catch(e){
        console.log(e)
        return res.status(500).json({ "error"  : "Error in Updating Pickup"});
    }
}

export const getAllShedules =async (req,res)=>{
    try{
        const result = await shedule.find({});
        if(!result) return res.status(500).json({ "error"  : "Error in Getting Pickups"});
        return res.status(200).json(result);
    }catch(e){
        console.log(e)
        return res.status(500).json({ "error"  : "Error in Getting Pickups"}); 
    }
}


export const getPersonalShedule = async (req,res)=>{
    try{
        const result = await shedule.find({createdBy : req.params.id});
        if(!result) return res.status(500).json({ "error"  : "Error in Getting Pickups"});
        return res.status(200).json(result);
    }catch(e){
        console.log(e)
        return res.status(500).json({ "error"  : "Error in Getting Pickups"}); 
    }
}