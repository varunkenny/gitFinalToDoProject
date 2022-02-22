const mongoose = require("mongoose")


//schema 
const ScheduleSchema = new mongoose.Schema({
    scheduleName:{
        type:String
           }
    
    })

//model 
const SchedulModel = mongoose.model("scheduler",ScheduleSchema) //Schedule

module.exports = SchedulModel 
