import * as types from "../actionsTypes/FolderActionsType";
import fire from "../../config/firebase";
import { toast } from "react-toastify";
import axios from 'axios';


// FOLDERS
const addFolder = (payload) => ({
  type: types.CREATE_FOLDER,
  payload,
});
const addFolders = (payload) => ({
  type: types.ADD_FOLDER,
  payload,
});
const setLoading = (payload) => ({
  type: types.SET_LOADING,
  payload,
});

const setChangeFolder=(payload)=>({
  type: types.CHANGE_FOLDER,
  payload,
});

const removeFolder = (folderId) => ({
  type: types.REMOVE_FOLDER,
  payload: folderId,
});
export const copyfolderToBuffer = (payload) => ({
  type: types.COPY_FOLDERS_TOBUFFER,
  payload,
});

const moveFolder = (payload) => ({
  type: types.MOVE_FOLDER,
  payload,
});

// FOLDERS
export const createFolder = (data ,setSuccess) =>(dispatch)=>{
  fire.firestore().collection('folders').add(data).then( async folder=>{
    const folderData = await (await folder.get()).data();
    const folderId = folder.id; 
    dispatch(addFolder({ data:folderData , docId:folderId }));
    toast.success("Created Folder Successfully"+folder.name);
    setSuccess(true);
  }).catch((error)=>{
    console.log(error)
  });
};

export const gitFolders = (userId) => (dispatch)=>{
  dispatch(setLoading(true))
  fire.firestore().collection("folders").where("userId","==",userId).get().then(
    async (folders)=>{
      const foldersData = await folders.docs.map((folder)=>({
        data: folder.data(),
        docId: folder.id,
      })); 
      dispatch(setLoading(false)); 
      dispatch(addFolders(foldersData));
    });
};

export const changeFolder =(folderId) => (dispatch)=>{
  dispatch(setChangeFolder(folderId));
};

export const pasteFolder=(data)=>(dispatch)=>{
  fire.firestore().collection('folders').add(data).then( async folder =>{
    const folderData = await (await folder.get()).data();
    const folderrId = folder.id; 
    dispatch(addFolder({ data:folderData , docId:folderrId }));
    toast.success("Coped Folder Successfully"+folder.name);
  }).catch(()=>{
    toast.error("Something went wrong!");
  });
}

export const cutFolder= (docId,data) => (dispatch)=>{
fire.firestore().collection("folders").doc(docId).update({
  name: data.name,
  path: data.path,
  parent : data.parent    
}).then( async() => {
  dispatch(moveFolder({ docId , data }));
  toast.success("Folder moved successfully!");
})
.catch(() => {
  toast.error("Something went wrong!");
});
}
// export const deletefolder = (folder) => async (dispatch) => {

//   const fireStore = fire.firestore();
//   const fireStorage = fire.storage();
//   const batch = fire.batch();

//   const deleteFile = async (folderdocId) => {
//     const fileRef = fire.collection("files").where("parent","==",folderdocId);
//     const fileSnapshot = await fileRef.get();

//     if (fileSnapshot.exists) {
//       // Delete the file document from Firestore
//       batch.delete(fileRef);

//       const isImage = file.type.startsWith('image');
//       // Delete the actual file from Firebase Storage
//       const filePath = isImage ? `images/${fileId}` : `files/${fileId}`;
//       const fileStorageRef = fireStorage.ref(filePath);
//       batch.delete(fileStorageRef);

//       if (isImage) {
//         const thumbnailPath = `thumbnails/${fileId}`;
//         const thumbnailStorageRef = fireStorage.ref(thumbnailPath);
//         batch.delete(thumbnailStorageRef);
//       }
//     }
//   };

//   const deleteFolder = async (folderRef) => {
//     const snapshot = await folderRef.get();

//     if (snapshot.exists) {
//       batch.delete(folderRef);

//       const files = snapshot.data().files || [];
//       const subfolders = snapshot.data().subfolders || [];

//       // Delete files in the folder
//       files.forEach(async (fileId) => {
//         await deleteFile(fileId, false);
//       });

//       // Delete subfolders and their content
//       subfolders.forEach(async (subfolderId) => {
//         const subfolderRef = fireStore.collection('folder_collection').doc(subfolderId);
//         await deleteFolder(subfolderRef);
//       });
//     }
//   };

//   const folderRef = fireStore.collection("folders").doc(folder.docId);
//   await deleteFolder(folderRef);

//   return batch.commit();

// };

// try {

//   fire.firestore().collection("files").where("parent","==",folder.docId).delete().then()
  
//   const { url, thumbnailUrl } = folder.data;
 
//   url && await fire.storage().refFromURL(url).delete();
//   thumbnailUrl && await fire.storage().refFromURL(thumbnailUrl).delete();

//   await fire.firestore().collection('folders').doc(folder.docId).delete();

//   dispatch(removeFolder(folder.docId));
//   toast.success("Folder Deleted Successfully");
// } catch (error) {
//   console.error("Error deleting Folder:", error);
//   toast.error("Failed to delete the Folder");
// }
