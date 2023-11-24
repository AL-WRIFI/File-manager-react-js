import * as types from "../actionsTypes/filefoldersActionsTypes";
import fire from "../../config/firebase";
import { toast } from "react-toastify";


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

export const uploadFile = ( file, data, setSuccess) =>(dispatch)=>{
  const uploadFileRef = fire.storage().ref(`files/${data.userId}/${data.name}`);
  uploadFileRef.put(file).on("state_changed", (snapshot)=>{
    const progress = Math.round(
      (snapshot.bytesTransferred / snapshot.totalBytes) *100
    );
    console.log("Uploading "+progress+"%")
  },

  (error)=>{console.log(error)},
    async()=>{
    const fileUrl = await uploadFileRef.getDownloadURL();
    const fullData = { ...data, url:fileUrl};
    
    fire.firestore().collection('files').add(fullData).then( async (file)=>{
      
      const fileData = await (await file.get()).data();
      const filerId = file.id;       
      dispatch(addFile({ data:fileData , docId:filerId }));
      toast.success("File Uploaded Successfully");
      setSuccess(true);

    }).catch(()=>{setSuccess(false)})
  
  })
};