import mng from 'mongoose'
import um from '../models/userModel.js';

let db_connect=async(uri)=>{
    try {
        console.log('the uri in db is = ',uri);

        let opt={
            dbName:process.env.dbn
        }
       await mng.connect(uri,opt);
          console.log('the data base conect successfully....');
        
    } catch (error) {
       console.log('the error is ',error.message);  
    }
}
export default db_connect;
