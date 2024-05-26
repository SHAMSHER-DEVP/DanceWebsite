import exp from 'express'
import dot from 'dotenv'
 import rt from './router/web.js'
 import db_connect from './database/connect.js'
 import {join}  from 'path'
 dot.config()
let app=exp();
//  connect the database to site ::
  
let uri=process.env.Uri;
db_connect(uri);

let pt =process.env.PORT || 80 ;
// set the static file for styling ::
app.use(exp.static(join(process.cwd(),"public")));



// set the middle ware for get form data :
app.use(exp.urlencoded());
// set the directory ::
app.set("views",'./views');
// set the template ::
app.set("view engine","pug");

// loa the router :: 
app.use("",rt);
app.listen(pt,()=>{
    console.log(`the port is running at the http://localhost:${pt}`);
})