// import {addToParentSubFiles} from "../SharedActions/SharedActions"
// import { addFile } from "../FileActions";
// import { toast } from "react-toastify";
import { toast } from "react-toastify";
import { addFolder } from "./ActionsFolderReducer";
import fire from "../../../config/firebase";
import { createFile } from "../FileActions/CreateFile";
import { addToParentSubFolders } from "../SharedActions/SharedActions";


export const pasetFolder = (docId,data) => async (dispatch) => {
    const DB = fire.firestore();
    const sourceFolderId = docId;
    
  
    const copyFolder = async (sourceFolderRef, destinationParentId) => {
  
      const batch = DB.batch();
      try {
        const sourceSnapshot = await sourceFolderRef.get();
        const folderData = sourceSnapshot.data();
        //console.log(folderData);
        if (sourceSnapshot.exists) {
          const destinationFolderData = {
            ...folderData,
            // subFiles: [],
            // subFolders: [],
            parent: destinationParentId,
          };
          
          const destinationFolderRef = await DB.collection('folders').add(destinationFolderData);
          const destinationSnapshot = await destinationFolderRef.get();
          const destinationData = destinationSnapshot.data();

          addToParentSubFolders(destinationFolderRef.id ,destinationParentId);
          await dispatch(addFolder({ data:destinationData , docId:destinationFolderRef.id}));
          const files = await DB.collection('files').where('parent', '==', sourceFolderRef.id).get();
          files.forEach(async (file) => {
           const isImage = file.data().type && file.data().type.startsWith('image');
            if(isImage){
            //   const sourceImageUrl = file.data().url; 
            //   const imageBlob = await fetch(sourceImageUrl).then(response => response.blob());
    
            //   const storageRef = fire.storage().ref();
            //   const destinationImagePath = `files/${file.data().userId}/${file.data().name}`;
            //   const destinationImageRef = storageRef.child(destinationImagePath);
            //   await destinationImageRef.put(imageBlob);
              const newFileData = {
                ...file.data(),
                // url : await destinationImageRef.getDownloadURL(),
                parent: destinationFolderRef.id,
              };
              
              // await DB.collection('files').add(newFileData);
              await dispatch(createFile(newFileData));
              
            }else{
              const newFileData = {
                ...file.data(),
                parent: destinationFolderRef.id,
              };
              await dispatch(createFile(newFileData));
            }
            
            
          });
  
          const subfolders = await DB.collection('folders').where('parent', '==', sourceFolderRef.id).get();
          subfolders.forEach(async (subfolder) => {
            await copyFolder(DB.collection('folders').doc(subfolder.id), destinationFolderRef.id);
          });
  
          
          await batch.commit();
        }
      } catch (error) {
        console.error('حدث خطأ أثناء عملية النسخ: ', error.message);
        throw error;
      }
    };
  
    const sourceFolderRef = DB.collection('folders').doc(sourceFolderId);
    sourceFolderRef.update({subFolders : []})
    try {

      await copyFolder(sourceFolderRef,data.parent);
      toast.success("Folder copied successfully!");
    } catch (error) {
      console.error('حدث خطأ أثناء عملية النسخ: ', error.message);
    }
  };