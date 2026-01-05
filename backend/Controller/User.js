const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
require("dotenv").config(); 
const {UserModel}=require('../model/UserModel')


exports.signUp = async(req , res) => {
    try{
    const { 
        name,
        email,
        password , 
    } = req.body ;

console.log("1st")

    if(!email || !password || !name)
        {
        return res.status(403).json({
            success : false ,
            message : "All fields are required" ,
        })
    }
    const existingUser = await UserModel.findOne({email}) ;
    if(existingUser) {
        return res.status(400).json({
            succes: false, 
            message : 'User is already Registered' ,
        })  ;
    }

  
     console.log("3rd")
     

 const hashedpassword = await bcrypt.hash(password , 10) ;

     const user  = await UserModel.create({
        name,
        email,
        password : hashedpassword ,

     })
console.log("5th")
     return res.status(200).json({
        success : true ,
        message :'User is Registered ',
        user ,

     }) ;
     console.log("6th")
    }
    catch(error){
        console.log(error) ; 
        return res.status(500).json({
            success : false ,
            message : "User cannot be registered  !!!  please try again " ,
        }) ;

    }
}








exports.login = async(req , res) => {
    try{
        const {email , password} = req.body ;
        if(!email || !password){
            return res.status(403).json({
                success : false ,
                message : "All fields are Required" ,
            }) ;
        }

        const user = await UserModel.findOne({email});
        if(!user){
            return res.status(401).json({
                 success: false ,
                 message : "NO Account found . Please Create a New Account " ,
            }) ;
        }

        if(await bcrypt.compare(password , user.password)) {
            const payload  = {
                email : user.email ,
                id : user.id ,
                
            }

            const token = jwt.sign(payload , process.env.JWT_SECRET , {
                expiresIn : "2h" ,
            }) ;

            user.token = token ;
            user.password = undefined ;


            const options = {
                expires : new Date(Date.now() + 3*24*60*60*1000),
                httpOnly : true ,
	            secure: true  ,       
               sameSite: "None", 
            }


            res.cookie("token" , token  , options).status(200).json({
                success : true ,
                token , 
                user ,
                message : "Logged In Successfully !!" ,
            }) ;
        }
        else{
            return res.status(401).json({
                success : false ,
                message : "Password not Matched" ,
            }) ;

        }


    }
    catch(error){
        console.log(error) ;
        return res.status(500).json({
            success : true ,
            message : "Login Failure ...try Again !!"
        }); 

    }
}


