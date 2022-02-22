const mongoose = require("mongoose")


//schema 
const ScheduleMasterSchema = new mongoose.Schema({
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref: "user"
           },
    scheduleId:{
        type:mongoose.Schema.Types.ObjectId,
        ref: "scheduler"
    },
    categoryName:{
        type:mongoose.Schema.Types.ObjectId,
        ref: "category"
    },
    startDate:{
        type:Date
    },    
    endDate:{
        type:Date
    }
})

//model 
const SchedulerMasterModel = mongoose.model("scheduleMater",ScheduleMasterSchema) //scheduleMater

module.exports = SchedulerMasterModel 
