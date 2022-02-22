const ScheduleModel = require("../model/schedule-model")



module.exports.addSchedule = function (req,res){
    //db insert schedule
    let scheduleName = req.body.scheduleName
    console.log(scheduleName)   
    let schedule = new ScheduleModel({
        scheduleName:scheduleName
    })

    schedule.save(function(err,success){
            if(err){
                console.log(err);
                //sendMailToDev(err);
                res.json({msg:"SMW",status:-1,data:req.body})

            }else{
                res.json({msg:"schedule added",status:200,data:success})
            }
    })
 }

 module.exports.getAllSchedule = function(req,res){

    //role -> db --> select * from roles 
    //model 

    //REST 
    ScheduleModel.find(function(err,roles){
        if(err){
            res.json({msg:"Something went wrong!!!",status:-1,data:err})
        }else{
            res.json({msg:"Schedules...",status:200,data:roles})
           }

    })
}
    module.exports.updateSchedule = function(req,res){
        let scheduleId = req.body.scheduleId 
        let scheduleName = req.body.scheduleName 
    
        ScheduleModel.updateOne({_id:scheduleId},{scheduleName:scheduleName},function(err,data){
            if(err){
                res.json({msg:"Something went wrong!!!",status:-1,data:err})
            }else{
                res.json({msg:"updated...",status:200,data:data})
            }
        })
    
 }
 module.exports.deleteSchedule = function(req,res){
    let scheduleId = req.params.scheduleId

    //delete from schedule where scheduleId = 1 
    ScheduleModel.deleteOne({"_id":scheduleId},function(err,data){
        if(err){
            res.json({msg:"Something went wrong!!!",status:-1,data:err})
        }else{
            res.json({msg:"removed...",status:200,data:data})
        }
    })

  }

   
