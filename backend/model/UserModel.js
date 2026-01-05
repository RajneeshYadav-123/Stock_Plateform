const {model}=require('mongoose');
const {UserSchema}=require('../schemas/User');

const UserModel=new model("UserModel",UserSchema);


module.exports={UserModel};