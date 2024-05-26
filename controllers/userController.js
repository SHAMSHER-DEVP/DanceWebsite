import um from '../models/userModel.js' 
class us{
    static hm=(req,res)=>{
        res.status(200).render("home",{title:"home page",message:"this is the home page here "});
     }
    static contact=(req,res)=>{
      console.log('the contact get ');
        res.status(200).render("contact",{title:"contact page",message:"this is the contact page here "});
     }
    static crt=async (req,res)=>{
      console.log('create part has run')
        try {
          let {name,email,password,phone,address,desc}=req.body;
           let rt =await um.create({
            name:name,
            phone :phone,
            email:email,
            password:password,
            address:address,
            desc:desc

           });
      //  saving the docs :
       await rt.save();
       res.redirect('/');


           
        } catch (error) {
             res.send(`  some internal error 404, ${error.message}`);
        }
     }
        
    static  ab= async(req,res)=>{
        
        let parms={"title":"home","message":"this message is from the server here "};
        
      //   console.log('THE form data is is ',req.body);

         //   let {name,age,gender}=req.body;
         //   let dt= await  um({
         //    name:name,
         //    age:age,
         //    gender:gender
         //   });
           // saving the docs:
         //   dt.save();
        //    if(um.findOneById({_id:}))
      //   let rt= await um.findOneById({id:});
        console.log('the data is ',req.params.id)

     }

}

export  {us};
