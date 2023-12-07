// import {addToParentSubFiles} from "../SharedActions/SharedActions"
// import { addFile } from "../FileActions";
// import { toast } from "react-toastify";
import { toast } from "react-toastify";
import { addFolder } from "./ActionsFolderReducer";
import fire from "../../../config/firebase";
import { createFile } from "../FileActions/CreateFile";
import { addToParentSubFiles, addToParentSubFolders } from "../SharedActions/SharedActions";


export const pasetFolder = (docId, data) => async (dispatch) => {

const copyFolderRecursive = async (sourceFolderId, destinationParentId) => {
  try {
    const DB = fire.firestore();
    const sourceFolderSnapshot = await DB.collection('folders').doc(sourceFolderId).get();
    const sourceFolderData = sourceFolderSnapshot.data();
    
    const folderData = {
      ...sourceFolderData,
      parent: destinationParentId,
      subFiles: [],
      subFolders: [],
    }
    const destinationFolderRef = await DB.collection('folders').add(folderData);

    addToParentSubFolders(destinationFolderRef.id, destinationParentId);
    dispatch(addFolder({ data:folderData, docId:destinationFolderRef.id }));

    const subFolderIds = sourceFolderData.subFolders || [];
    const subFilesIds = sourceFolderData.subFiles || [];
    await subFilesIds.forEach(async (file) => {
            const subFiles = await DB.collection('files').doc(file).get();
            // const isImage = file.data().type && file.data().type.startsWith('image');
            const newFileData = {
              ...subFiles.data(),
              parent: destinationFolderRef.id,
            };
      
            
             await dispatch(createFile(newFileData));
  
      });

    for (const subFolderId of subFolderIds) {
      await copyFolderRecursive(subFolderId, destinationFolderRef.id);
    }

  } catch (error) {
    console.error('حدث خطأ أثناء عملية النسخ: ', error.message);
    throw error;
  }
};



// استخدم الدالة لنسخ المجلد
const sourceFolderId = docId;
const destinationParentId = data.parent;
try {
  await copyFolderRecursive(sourceFolderId, destinationParentId);
  toast.success('تم نسخ المجلد والمجلدات الفرعية بنجاح!');
} catch (error) {
  console.error('حدث خطأ: ', error.message);
  toast.error('حدث خطأ أثناء نسخ المجلد والمجلدات الفرعية.');
}
  
};










// export const pasetFolder = (docId, data) => async (dispatch) => {
//   const DB = fire.firestore();
//   const sourceFolderId = docId;

//   const copyFolder = async (sourceFolderRef, destinationParentId) => {
//     const batch = DB.batch();

//     try {
//       const folderData = await getFolderData(sourceFolderRef);

//       if (!folderData) {
//         console.error('Folder data not found.');
//         return;
//       }

      
//       const destinationFolderRef = await createDestinationFolder(folderData, destinationParentId);

//       if (!destinationFolderRef) {
//         console.error('Failed to create destination folder.');
//         return;
//       }

//       await addToParentAndDispatch(folderData, destinationFolderRef, destinationParentId);
      
//       await copyFiles(folderData, sourceFolderRef, destinationFolderRef);
//       await copySubfolders(sourceFolderRef, destinationFolderRef);

//       await batch.commit();
//     } catch (error) {
//       console.error('حدث خطأ أثناء عملية النسخ: ', error.message);
//       throw error;
//     }
//   };

//   const getFolderData = async (folderRef) => {
//     const snapshot = await folderRef.get();
//     const data = snapshot.exists ? snapshot.data() : null;
    
//     return data;
//   };

//   const createDestinationFolder = async (folderData, destinationParentId) => {

//     try {
//       const destinationFolderRef = await DB.collection('folders').add({
//         ...folderData,
//         parent: destinationParentId,
//         subFolders: [],
//       });

//       return destinationFolderRef;
//     } catch (error) {
//       console.error('Failed to create destination folder: ', error.message);
//       return null;
//     }
//   };

//   const addToParentAndDispatch = async (folderData, destinationFolderRef, destinationParentId) => {
//     addToParentSubFolders(destinationFolderRef.id,destinationParentId);
//     await dispatch(addFolder({ data:folderData, docId:destinationFolderRef.id }));
//   };

//   const copyFiles = async (folderData, sourceFolderRef, destinationFolderRef) => {
//     const files = await DB.collection('files').where('parent', '==', sourceFolderRef.id).get();
//     files.forEach(async (file) => {
//       const isImage = file.data().type && file.data().type.startsWith('image');
//       const newFileData = {
//         ...file.data(),
//         parent: destinationFolderRef.id,
//       };

//       await dispatch(createFile(newFileData));

//       if (isImage) {
//         // Add your image-specific logic here
//       }
//     });
//   };

//   const copySubfolders = async (sourceFolderRef, destinationFolderRef) => {
//     const subfolders = await DB.collection('folders').where('parent', '==', sourceFolderRef.id).get();
    
//     subfolders.forEach(async (subfolder) => {
//       await copyFolder(DB.collection('folders').doc(subfolder.id), destinationFolderRef.id);
//     });
//   };

//   const sourceFolderRef = DB.collection('folders').doc(sourceFolderId);
  

//   try {
//     await copyFolder(sourceFolderRef, data.parent);
//     // await dispatch(addFolder({ data:folderData, docId:destinationFolderRef.id }));
//     toast.success('Folder copied successfully!');
//   } catch (error) {
//     console.error('حدث خطأ أثناء عملية النسخ: ', error.message);
//   }
// };









// export const pasetFolder = (docId,data) => async (dispatch) => {
//     const DB = fire.firestore();
//     const sourceFolderId = docId;
    
  
//     const copyFolder = async (sourceFolderRef, destinationParentId) => {
  
//       const batch = DB.batch();
//       try {
//         const sourceSnapshot = await sourceFolderRef.get();
//         const folderData = sourceSnapshot.data();
        
//         //console.log(folderData);
//         if (sourceSnapshot.exists) {
//           const destinationFolderData = {
//             ...folderData,
//             parent: destinationParentId,
//           };
          
//           const destinationFolderRef = await DB.collection('folders').add(destinationFolderData);
//           const destinationSnapshot = await destinationFolderRef.get();
//           const destinationData = destinationSnapshot.data();

//           addToParentSubFolders(destinationFolderRef.id ,destinationParentId);
//           await dispatch(addFolder({ data:destinationData , docId:destinationFolderRef.id}));
//           const files = await DB.collection('files').where('parent', '==', sourceFolderRef.id).get();
//           files.forEach(async (file) => {
//            const isImage = file.data().type && file.data().type.startsWith('image');
//             if(isImage){
//               //const sourceImageUrl = file.data().url; 
//               //const imageBlob = await fetch(sourceImageUrl).then(response => response.blob()  );
//               //const storageRef = fire.storage().ref();

//               //const destinationImagePath = `files/${file.data().userId}/${file.data().name}`;
//               //const destinationImageRef = storageRef.child(destinationImagePath);
//               //await destinationImageRef.put(imageBlob);
//               const newFileData = {
//                 ...file.data(),
//                 // url : await destinationImageRef.getDownloadURL(),
//                 parent: destinationFolderRef.id,
//               };
              
//               // await DB.collection('files').add(newFileData);
//               await dispatch(createFile(newFileData));
              
//             }else{
//               const newFileData = {
//                 ...file.data(),
//                 parent: destinationFolderRef.id,
//               };
//               await dispatch(createFile(newFileData));
//             }
            
            
//           });
  
//           const subfolders = await DB.collection('folders').where('parent', '==', sourceFolderRef.id).get();
          
          
//           subfolders.forEach(async (subfolder) => {       
//             const subfolderId = await copyFolder(DB.collection('folders').doc(subfolder.id), destinationFolderRef.id);
//             console.log(subfolderId);
//             destinationFolderData.subFolders.push(subfolderId);
//           });
  
          
//           await batch.commit();
//         }
//       } catch (error) {
//         console.error('حدث خطأ أثناء عملية النسخ: ', error.message);
//         throw error;
//       }
//     };
  
//     const sourceFolderRef = DB.collection('folders').doc(sourceFolderId);
//     sourceFolderRef.update({subFolders : []})
//     try {

//       await copyFolder(sourceFolderRef,data.parent);
//       toast.success("Folder copied successfully!");
//     } catch (error) {
//       console.error('حدث خطأ أثناء عملية النسخ: ', error.message);
//     }
//   };