const SchedulerMasterModel = require("../model/scheduleMaster-model")



module.exports.addScheduleMaster = function (req,res) {
    
    let userId = req.body.userId
    let scheduleId = req.body.scheduleId 
    let categoryName = req.body.categoryName
    let startDate = req.body.startDate
    let endDate = req.body.endDate 
 
    let scheduleMaster = new SchedulerMasterModel({
 
        userId: userId,
        scheduleId: scheduleId,
        categoryName: categoryName,
        startDate: startDate,
        endDate: endDate
    })

    scheduleMaster.save(function(err,success){
            if(err){
                console.log(err);
                //sendMailToDev(err);
                res.json({msg:"SMW",status:-1,data:req.body})

            }else{
                res.json({msg:"schedule Date added",status:200,data:success})
            }
    })
 }

 module.exports.getAllSchedule = function(req,res){

    //role -> db --> select * from roles 
    //model 

    //REST 
    SchedulerMasterModel.find().populate().exec(function(err,addScheduleMaster){
        if(err){
            res.json({msg:"Something went wrong!!!",status:-1,data:err})
        }else{
            res.json({msg:"Schedules...",status:200,data:addScheduleMaster})
           }

    })
}


    module.exports.updateSchedule = function(req,res){
        let schId = req.body.scheduleMasterId
        let startDate = req.body.startDate 
        let endDate = req.body.endDate
    
        SchedulerMasterModel.updateOne({ "_id":schId},{startDate:startDate},{endDate:endDate},function(err,data){
            if(err){
                res.json({msg:"Something went wrong!!!",status:-1,data:err})
            }else{
                res.json({msg:"updated...",status:200,data:data})
            }
        })
    
 }
 module.exports.deleteScheduleMaster = function(req,res){
    let scheduleMasterId = req.params.scheduleMasterId

    //delete from schedule where scheduleId = 1 
    SchedulerMasterModel.deleteOne({"_id":scheduleMasterId },function(err,data){
        if(err){
            res.json({msg:"Something went wrong!!!",status:-1,data:err})
        }else{
            res.json({msg:"removed...",status:200,data:data})
        }
    })

  }

   
