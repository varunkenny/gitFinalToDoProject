const ReminderModel = require("../model/reminder-model")



module.exports.addReminder = function (req,res){
    //db insert schedule
   // let dailyScheduleId = req.body.dailyScheduleId
    let forkDate = req.body.forkDate
    let forkTime = req.body.forkTime
    let isComplete = req.body.isComplete
    let priorityId = req.body.priorityId
    console.log(scheduleName)   
    let schedule = new DailyScheduleModel({
        scheduleId:scheduleId,
        forkDate:forkDate,
        forkTime:forkTime,
        isComplete:isComplete,
        priorityId:priorityId
    })

    schedule.save(function(err,success){
            if(err){
                console.log(err);
                //sendMailToDev(err);
                res.json({msg:"SMW",status:-1,data:req.body})

            }else{
                res.json({msg:"Daily schedule added",status:200,data:success})
            }
    })
 }

 module.exports.getAllDailySchedule = function(req,res){

    //role -> db --> select * from roles 
    //model 

    //REST 
    DailyScheduleModel.find(function(err,roles){
        if(err){
            res.json({msg:"Something went wrong!!!",status:-1,data:err})
        }else{
            res.json({msg:"Schedules...",status:200,data:roles})
           }

    })
}
    module.exports.updateDailySchedule = function(req,res){
        let dailyScheduleId = req.body.dailyScheduleId
        let forkDate = req.body.forkDate
        let forkTime = req.body.formTime
        let isComplete = req.body.isComplete
        let priorityId = req.body.priorityId
        ScheduleModel.updateOne({_id:dailyScheduleId},{forkDate:forkDate},{forkTime:forkTime},{isComplete:isComplete},{priorityId:priorityId},function(err,data){
            if(err){
                res.json({msg:"Something went wrong!!!",status:-1,data:err})
            }else{
                res.json({msg:"Daily Schedule updated...",status:200,data:data})
            }
        })
    
 }
 module.exports.deleteDailySchedule = function(req,res){
        let dailyScheduleId = req.params.dailyScheduleId
        let forkDate = req.params.forkDate
        let forkTime = req.params.formTime
        let isComplete = req.params.isComplete
        let priorityId = req.params.priorityId

    //delete from schedule where scheduleId = 1 
    DailyScheduleModel.deleteOne({"_id":dailyScheduleId},{forkDate:forkDate},{forkTime:forkTime},{isComplete:isComplete},{priorityId:priorityId},function(err,data){
        if(err){
            res.json({msg:"Something went wrong!!!",status:-1,data:err})
        }else{
            res.json({msg:"removed...",status:200,data:data})
        }
    })

  }


   
