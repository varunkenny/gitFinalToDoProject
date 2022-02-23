const DailyScheduleModel = require("../model/dailySchedule-model")



module.exports.addDailySchedule = function (req,res){
    //db insert schedule
   // let dailyScheduleId = req.body.dailyScheduleId
    let forkId = req.body.forkId
    let remDate = req.body.remDate
    let description = req.body.description
    //console.log(scheduleName)   
    let reminder = new ReminderModel({
        forkId:forkId,
        remDate:remDate,
        description:description
    })

    reminder.save(function(err,success){
            if(err){
                console.log(err);
                //sendMailToDev(err);
                res.json({msg:"SMW",status:-1,data:req.body})

            }else{
                res.json({msg:"Reminder added",status:200,data:success})
            }
    })
 }

 module.exports.getAllReminder = function(req,res){

    //role -> db --> select * from roles 
    //model 

    //REST 
    ReminderModel.find(function(err,roles){
        if(err){
            res.json({msg:"Something went wrong!!!",status:-1,data:err})
        }else{
            res.json({msg:"Reminders...",status:200,data:roles})
           }

    })
}
    module.exports.updateReminder = function(req,res){
        let forkId = req.body.forkId
        let remDate = req.body.remDate
        let description = req.body.description
        ScheduleModel.updateOne({_id:forkId},{remDate:remDate},{description:description},function(err,data){
            if(err){
                res.json({msg:"Something went wrong!!!",status:-1,data:err})
            }else{
                res.json({msg:"Reminders updated...",status:200,data:data})
            }
        })
    
 }
 module.exports.deleteReminder = function(req,res){
            let forkId = req.body.forkId
            let remDate = req.body.remDate
            let description = req.body.description

    //delete from schedule where scheduleId = 1 
    ReminderModel.deleteOne({"_id":forkId},{remDate:remDate},{description:description},function(err,data){
        if(err){
            res.json({msg:"Something went wrong!!!",status:-1,data:err})
        }else{
            res.json({msg:"removed...",status:200,data:data})
        }
    })

  }


   
