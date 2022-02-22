const CategoryModel = require("../model/category-model")



module.exports.addCategory = function (req,res){
    //db insert schedule
    let categoryName = req.body.categoryName
    console.log(categoryName)   
    let category = new CategoryModel({
        categoryName:categoryName
    })

    category.save(function(err,success){
            if(err){
                console.log(err);
                //sendMailToDev(err);
                res.json({msg:"SMW",status:-1,data:req.body})

            }else{
                res.json({msg:"Category added",status:200,data:success})
            }
    })
 }

 module.exports.getAllCategory = function(req,res){

    //role -> db --> select * from roles 
    //model 

    //REST 
    CategoryModel.find(function(err,roles){
        if(err){
            res.json({msg:"Something went wrong!!!",status:-1,data:err})
        }else{
            res.json({msg:"Categories...",status:200,data:roles})
           }

    })
}
    module.exports.updateCategory = function(req,res){
        let categoryId = req.body.categoryId 
        let categoryName = req.body.categoryName 
    
        CategoryModel.updateOne({_id:categoryId},{categoryName:categoryName},function(err,data){
            if(err){
                res.json({msg:"Something went wrong!!!",status:-1,data:err})
            }else{
                res.json({msg:"updated...",status:200,data:data})
            }
        })
    
 }
 module.exports.deleteCategory = function(req,res){
    let categoryId = req.params.categoryId

    //delete from schedule where scheduleId = 1 
    CategoryModel.deleteOne({"_id":categoryId},function(err,data){
        if(err){
            res.json({msg:"Something went wrong!!!",status:-1,data:err})
        }else{
            res.json({msg:"removed...",status:200,data:data})
        }
    })

  }

   
