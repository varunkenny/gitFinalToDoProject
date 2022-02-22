const fs = require("fs")

function login(req,res){
    res.write("Welcome to login screen......")
    res.end()
}
function signup(req,res){
    // res.write("Welcome to Signup Screen......")
    let signupHtml = fs.readFileSync("./view/Signup.html")
    res.write(signupHtml)
    res.end()
}
function saveuser(req,res){
    console.log(req.body)
    res.write("Data Saved")
    res.end()
}

module.exports.login = login
module.exports.signup = signup
module.exports.saveuser = saveuser