

import mng from 'mongoose'

 let userSchema= mng.Schema({
    name:{type:String,required:true},
    phone:{type:String,required:true},
    email:{type:String,required:true,unique:true},
    password:{type:String,required:true},
    address:{type:String,required:true},
    desc:{type:String,required:true},
    join:{type:Date,default:Date.now}
 });

   // compiling ::
   let um= mng.model("user",userSchema);
export default um;

 