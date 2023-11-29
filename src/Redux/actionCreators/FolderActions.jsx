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


