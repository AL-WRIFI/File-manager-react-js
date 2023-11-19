import * as types from "../actionsTypes/filefoldersActionsTypes";
import fire from "../../config/firebase";


const addFolder = (payload) => ({
  type: types.CREATE_FOLDER,
  payload
});
const addFolders = (payload) => ({
  type: types.ADD_FOLDER,
  payload
});
const setLoading = (payload) => ({
  type: types.SET_LOADING,
  payload,
});
export const createFolder = (data) =>(dispatch)=>{
  fire.firestore().collection('folders').add(data).then( async folder=>{
    const folderData = await (await folder.get()).data();
    const folderId = folder.id; 
    dispatch(addFolder({ data:folderData , docId:folderId }));
  });
}

export const gitFolders = (userId) => (dispatch)=>{
  dispatch(setLoading(true))
  fire.firestore().collection("folders").where("userId","==",userId).get().then(
    async (folders)=>{
      const foldersData = await folders.docs.map((folder)=>({
        data: folder.data(),
        docId: folder.id,
      })); 
      dispatch(addFolders(foldersData));
      dispatch(setLoading(false)); 
    });
}


// const setAdminFiles = (data) => ({
//   type: SET_ADMIN_FILES,
//   payload: data,
// });
// const setAdminFolders = (data) => ({
//   type: SET_ADMIN_FOLDERS,
//   payload: data,
// });

// export const getAdminFolders = () => (dispatch) => {
//   dispatch(setLoading(true));

//   database.docs
//     .where("createdBy", "==", "admin")
//     .get()
//     .then((folders) => {
//       const allFolders = [];
//       folders.docs.forEach((doc) => {
//         allFolders.push({ data: doc.data(), docId: doc.id });
//       });
//       dispatch(setAdminFolders(allFolders));
//       dispatch(setLoading(false));
//     })
//     .catch((err) => {
//       toast.error("Failed to fetch data!");
//     });
// };
// export const getAdminFiles = () => (dispatch) => {
//   database.files
//     .where("createdBy", "==", "admin")
//     .get()
//     .then((files) => {
//       const allFiles = [];
//       files.docs.forEach((doc) => {
//         allFiles.push({ data: doc.data(), docId: doc.id });
//       });
//       dispatch(setAdminFiles(allFiles));
//     })
//     .catch((err) => {
//       toast.error("Failed to fetch data!");
//     });
// };

// const setUserFolders = (data) => ({
//   type: SET_USER_FOLDERS,
//   payload: data,
// });

// export const getUserFolders = (userId) => async (dispatch) => {
//   if (userId) {
//     database.docs
//       .where("createdBy", "==", userId)
//       .get()
//       .then((folders) => {
//         const allFolders = [];
//         folders.docs.forEach((doc) => {
//           allFolders.push({ data: doc.data(), docId: doc.id });
//         });
//         dispatch(setUserFolders(allFolders));
//       })
//       .catch((err) => {
//         console.log("foldererr", err);
//         toast.error("Failed to fetch data!");
//       });
//   }
// };



// export const addFolderUser = (name, userId, parent, path) => (dispatch) => {
//   database.docs
//     .add(docModel(userId, name, path, parent))
//     .then(async (doc) => {
//       const data = await doc.get();
//       dispatch(addUserFolder({ data: data.data(), docId: data.id }));
//       toast.success("Folder added Successfully!");
//     })
//     .catch((err) => {
//       console.log(err);
//       toast.error("Something went wrong!");
//     });
// };

// const setUserFiles = (data) => ({
//   type: SET_USER_FILES,
//   payload: data,
// });

// export const getUserFiles = (userId) => (dispatch) => {
//   if (userId) {
//     database.files
//       .where("createdBy", "==", userId)
//       .get()
//       .then((files) => {
//         const allFiles = [];
//         files.docs.forEach((doc) => {
//           allFiles.push({ data: doc.data(), docId: doc.id });
//         });
//         dispatch(setUserFiles(allFiles));
//       })
//       .catch((err) => {
//         console.log("foldererr", err);
//         toast.error("Failed to fetch data!");
//       });
//   }
// };

// const addUserFile = (data) => ({
//   type: ADD_USER_FILE,
//   payload: data,
// });

// export const addFileUser =
//   ({ uid, parent, data, name, url, path }) =>
//   (dispatch) => {
//     database.files
//       .add(fileModel(uid, parent, data, name, url, path))
//       .then(async (doc) => {
//         const data = await doc.get();
//         dispatch(addUserFile({ data: data.data(), docId: data.id }));
//         if (data.data().url === "") {
//           toast.success("File created Successfully!");
//           toast.success("You can double click on the file to open the editor!");
//         } else {
//           toast.success("File uploaded Successfully!");
//         }
//       })
//       .catch((err) => {
//         console.log(err);
//         toast.error("Something went wrong!");
//       });
//   };

// const updateUserFileData = (data) => ({
//   type: UPDATE_USER_FILE_DATA,
//   payload: data,
// });

// export const userFileDataUpdate = (data, docId) => (dispatch) => {
//   database.files
//     .doc(docId)
//     .update({
//       updatedAt: new Date(),
//       data: data,
//     })
//     .then(() => {
//       dispatch(updateUserFileData({ data, docId }));
//       toast.success("Saved Successfully!!");

//       document.querySelector(".CodeMirror").focus();
//     })
//     .catch((err) => {
//       console.log(err);
//       toast.error("Something went wrong!");
//     });
// };
