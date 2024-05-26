 import exp from 'express'
import {us} from '../controllers/userController.js'

let rt= exp.Router();

 rt.get("",us.hm);
 rt.get("/contact",us.contact);
 rt.post("/contact",us.crt);

 export default rt;