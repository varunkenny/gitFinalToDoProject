const mongoose = require("mongoose")


//schema 
const DailyScheduleSchema = new mongoose.Schema({
    
    scheduleId:{
        type:mongoose.Schema.Types.ObjectId,
        ref: "scheduleId"
    },
    forkDate:{
        type:Date,
    },
    forkTime:{
        type:Date
    },    
    isComplete:{
        type:Date
    },
    priorityId:{
        type:Boolean
    }
})

//model 
const DailyScheduleModel = mongoose.model("dailySchedule",DailyScheduleSchema) //scheduleMater

module.exports = DailyScheduleModel 
