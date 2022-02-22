const express = require('express')
const mongoose = require("mongoose")

const sessionController = require("./controller/session-controller.js")
const roleController = require("./controller/role-controller")
const userController = require("./controller/user-controller")
const scheduleController = require("./controller/schedule-controller")
const categoryController = require("./controller/category-controller")


const app = express()
//middleware
app.use(express.json())
app.use(express.urlencoded({extended:true}))

mongoose.connect('mongodb://localhost:27017/to-list',function(err){
  if(err){
    console.log("db connection fai .. .. . ");
    console.log(err);
  }else{
    console.log("db Connected....");
  }
})
app.get("/login",sessionController.login)
app.get("/signup",sessionController.signup)
app.post("/saveuser",sessionController.saveuser)

//role
app.post("/roles",roleController.addRole)
app.get("/roles",roleController.getAllRoles)
app.delete("/roles/:roleId",roleController.deleteRole)
app.put("/roles",roleController.updateRole)

//user
app.post("/users",userController.addUser)
app.get("/users",userController.getAllUsers)
app.delete("/users/:userId",userController.deleteUser)
app.put("/users",userController.updateUser)
app.post("/login",userController.login)

//scheduler
app.post("/scheduler",scheduleController.addSchedule)
app.get("/scheduler",scheduleController.getAllSchedule)
app.delete("/scheduler/:scheduleId",scheduleController.deleteSchedule)
app.put("/scheduler",scheduleController.updateSchedule)

//category
app.post("/category",categoryController.addCategory)
app.get("/category",categoryController.getAllCategory)
app.delete("/category/:categoryId",categoryController.deleteCategory)
app.put("/category",categoryController.updateCategory)




app.listen(3000,function(){
    console.log("Hello World from the server")
})