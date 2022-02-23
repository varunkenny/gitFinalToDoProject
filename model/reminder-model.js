const mongoose = require("mongoose")


//schema 
const ReminderSchema = new mongoose.Schema({
    
    scheduleId:{
        type:mongoose.Schema.Types.ObjectId,
        ref: "scheduleId"
    },
    forkDate:{
        type:mongoose.Schema.Types.ObjectId,
        ref: "schedule"
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
