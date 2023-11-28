import * as types from "../actionsTypes/filefoldersActionsTypes";
import fire from "../../config/firebase";
import { toast } from "react-toastify";
import axios from 'axios';
import b64toBlob from 'b64-to-blob';
// import sharp from 'sharp';
// import {reactsharp} from "react-sharp";
// const sharp = require('sharp');

// const sharp = require('sharp')

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


// FILES
const addFile= (payload)=>({
  type: types.CREATE_FILES,
  payload,
})
const addFiles= (payload)=>({
  type: types.ADD_FILES,
  payload,
})
const setFileData = (payload) => ({
  type: types.SET_FILE_DATA,
  payload,
});
const copyFileBuffer = (payload) => ({
  type: types.COPY_FILES_TOBUFFER,
  payload,
});

export const copyFile=( file )=>(dispatch)=>{
    dispatch(copyFileBuffer({file: file }))
}

export const pasteFile=(data)=>(dispatch)=>{
    
    fire.firestore().collection('files').add(data).then( async file =>{
      const fileData = await (await file.get()).data();
      const filerId = file.id; 
      dispatch(addFile({ data:fileData , docId:filerId }));
      toast.success("Coped File Successfully"+file.name);
    }).catch(()=>{
      toast.error("Can Not Copy File ");

    });
    console.log(data);
}

// const setSelectedFiles =(item)=> ({
  
//       item,
//       type:types.SET_SELECTED_FILES

// })

// const  unsetSelectedFiles=() =>({
  
//       type:types.UNSET_SELECTED_FILES,
  
// })

// const  selectAllFiles =() =>({
  
//       type:types.SELECT_ALL_FILES
  
// })

// const inverseSelectedFiles =() =>({
  
//       type:types.INVERSE_SELECTED_FILES
  
// })

// const copyToBufferFiles =() =>({
  
//       type:types.COPY_FILES_TOBUFFER
  
// })

// const cutToBufferFiles =() =>({
  
//       type:types.CUT_FILES_TOBUFFER
  
// })

// const clearBufferFiles =() =>({
  
//       type:types.CLEAR_FILES_TOBUFFER
  
// })
// const setSelectedFolder(path, history) {
//   return {
//       type: types.SET_SELECTED_FOLDER,
//       path,
//       history
//   };
// }

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

// FILES
export const gitFile= (userId)=>(dispatch)=>{
  console.log(userId);
}
export const createFile = (data ,setSuccess) =>(dispatch)=>{
  fire.firestore().collection('files').add(data).then( async file =>{
    const fileData = await (await file.get()).data();
    const filerId = file.id; 
    dispatch(addFile({ data:fileData , docId:filerId }));
    setSuccess(true);
    toast.success("Created File Successfully"+file.name);
  }).catch(()=>{
    setSuccess(false);
  });
};

export const gitFiles = (userId) => (dispatch)=>{
  dispatch(setLoading(true))
  fire.firestore().collection("files").where("userId","==",userId).get().then(
    async (files)=>{
      const fileData = await files.docs.map((file)=>({
        data: file.data(),
        docId: file.id,
      })); 
      // dispatch(setLoading(false)); 
      dispatch(addFiles(fileData));
    });
};

export const updateFileData = (fileId, data) => (dispatch) => {
  fire
    .firestore()
    .collection("files")
    .doc(fileId)
    .update({ data })
    .then(() => {
      dispatch(setFileData({ fileId, data }));
      toast.success("File saved successfully!");
    })
    .catch(() => {
      toast.error("Something went wrong!");
    });
};

// export const uploadFile = ( file, data, setSuccess) =>(dispatch)=>{
//   const uploadFileRef = fire.storage().ref(`files/${data.userId}/${data.name}`);
//   uploadFileRef.put(file).on("state_changed", (snapshot)=>{
//     const progress = Math.round(
//       (snapshot.bytesTransferred / snapshot.totalBytes) *100
//     );
//     console.log("Uploading "+progress+"%")
//   },

//   (error)=>{console.log(error)},
//     async()=>{
//     const fileUrl = await uploadFileRef.getDownloadURL();
//     const fullData = { ...data, url:fileUrl};
    
//     fire.firestore().collection('files').add(fullData).then( async (file)=>{
      
//       const fileData = await (await file.get()).data();
//       const filerId = file.id;       
//       dispatch(addFile({ data:fileData , docId:filerId }));
//       toast.success("File Uploaded Successfully");
//       setSuccess(true);

//     }).catch(()=>{setSuccess(false)})
  
//   })
// };


export const uploadFile = (file, data, setSuccess) => (dispatch) => {
  const uploadFileRef = fire.storage().ref(`files/${data.userId}/${data.name}`);
  uploadFileRef.put(file).on(
    "state_changed",
    (snapshot) => {
      const progress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
      console.log("Uploading " + progress + "%");
    },
    (error) => {
      console.log(error);
    },
    async () => {
     
      const fileUrl = await uploadFileRef.getDownloadURL();
      const fullData = { ...data, url: fileUrl };
      console.log(file.type);

      const formData = new FormData();
      formData.append('image', file);

      const response = await axios.post('http://localhost:3000/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      
      const { resizedImageBuffer } = response.data;
      const thumbnailBuffer=`data:image/jpeg;base64,${resizedImageBuffer}`;
      
      const thumbnailRef = fire.storage().ref(`thumbnails/${data.userId}/${data.name}`);
      const blob = await (await fetch(thumbnailBuffer)).blob();
      console.log("------------------",blob);
      await thumbnailRef.put(blob);

      const thumbnailUrl = await thumbnailRef.getDownloadURL();
      const fullDataWithThumbnail = { ...fullData, thumbnailUrl };

      fire.firestore().collection('files').add(fullDataWithThumbnail).then(async (file) => {
        const fileData = await (await file.get()).data();
        const fileId = file.id;
        dispatch(addFile({ data: fileData, docId: fileId }));
        toast.success("File Uploaded Successfully");
        setSuccess(true);
      }).catch(() => {
        setSuccess(false);
      });
    }
  );
};
