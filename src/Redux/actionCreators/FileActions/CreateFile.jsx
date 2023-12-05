import {addToParentSubFiles} from "../SharedActions/SharedActions"
import { addFile } from "./ActionsFileReducer";
import fire from "../../../config/firebase";


export const createFile = (data) =>(dispatch)=>{
    
    fire.firestore().collection('files').add(data).then( async file =>{
      const fileData = await (await file.get()).data();
      const filerId = file.id; 
      addToParentSubFiles(file.id ,fileData.parent);
      dispatch(addFile({ data:fileData , docId:filerId }));
    }).catch(()=>{
       console.log("Error");
    });
  };

