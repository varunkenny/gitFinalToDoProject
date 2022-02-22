const mongoose = require("mongoose")


//schema 
const CategorySchema = new mongoose.Schema({
    categoryName:{
        type:String
           }
    
    })

//model 
const CategoryModel = mongoose.model("category",CategorySchema) //Schedule

module.exports = CategoryModel 
