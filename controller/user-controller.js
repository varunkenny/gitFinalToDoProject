const bcrypt = require("bcrypt")
const UserModel = require("../model/user-model")



module.exports.addUser = function (req, res) {
    //db insert role
    //console.log(req.body.userName);
    let userName = req.body.userName
    let email = req.body.email
    let password = req.body.password
    let role = req.body.role
    //encrypting the password
    let encPassword = bcrypt.hashSync(password, 10)

    let user = new UserModel({
        userName: userName,
        email: email,
        password: encPassword
    })

    user.save(function (err, success) {
        if (err) {
            console.log(err)
            //sendMailToDev(err);
            res.json({ msg: "SMW", status: -1, data: req.body })

        } else {
            res.json({ msg: "User added", status: 200, data: success })
        }
    })
}

module.exports.getAllUsers = function (req, res) {

    UserModel.find().populate("role").exec(function (err, data) {
        if (err) {
            res.json({ msg: "SMW", data: err, status: -1 })//-1  [ 302 404 500 ]
        } else {
            res.json({ msg: "users ret...", data: data, status: 200 })//http status code 
        }
    })
}
    module.exports.updateUser = function(req,res){

    
        let userId = req.body.userId 
        let userName = req.body.userName 
    
        UserModel.updateOne({_id:userId},{userName:userName},function(err,data){
            if(err){
                res.json({msg:"Something went wrong!!!",status:-1,data:err})
            }else{
                res.json({msg:"updated...",status:200,data:data})
            }
        })
    
 }
 module.exports.deleteUser = function(req,res){
    //params userid 
    let userId = req.params.userId //postman -> userid 

    UserModel.deleteOne({_id:userId},function (err, data) {
        if (err) {
            res.json({ msg: "SMW", data: err, status: -1 })//-1  [ 302 404 500 ]
        } else {
            res.json({ msg: "user removed...", data: data, status: 200 })//http status code 
        }
    })
}
//login 
module.exports.login = function(req,res){

    let param_email = req.body.email
    let param_password  = req.body.password 

    let isCorrect = false; 

    UserModel.findOne({email:param_email},function(err,data){
        if(data){
            let ans =  bcrypt.compareSync(param_password,data.password)
            if(ans == true){
                    isCorrect = true
            }
        }
    
        if (isCorrect == false) {
            res.json({ msg: "Invalid Credentials...", data: req.body, status: -1 })//-1  [ 302 404 500 ]
        } else {
            res.json({ msg: "Loged In Successfully....", data: data, status: 200 })//http status code 
        }
    })

}

 
