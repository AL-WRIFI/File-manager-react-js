import { addToParentSubFolders } from "../SharedActions/SharedActions"
import fire from "../../../config/firebase";
import { addFolder } from "./ActionsFolderReducer";


export const createFolder =  (data) => async (dispatch)=>{
  fire.firestore().collection('folders').add(data).then( async folder=>{
   const folderData = await (await folder.get()).data();
   const folderId = folder.id;
   folderData.parent !== "root" ? addToParentSubFolders(folder.id ,folderData.parent):"";
   await dispatch(addFolder({ data:folderData , docId:folderId }));
 }).catch((error)=>{
   console.log(error)
 });
};
