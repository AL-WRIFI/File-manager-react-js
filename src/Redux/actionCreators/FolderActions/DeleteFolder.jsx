import { toast } from "react-toastify";
import fire from "../../../config/firebase";
import { removeFolder } from "./ActionsFolderReducer";
import { removeFromParentSubFolders } from "../SharedActions/SharedActions";




export const deleteFolderAndSubfolders = (folder) => async (dispatch) => {
  const DB = fire.firestore();
  const folderId = folder.docId;

  const deleteFolder = async (folderRef, batch) => {
    try {
      const snapshot = await folderRef.get();
      if (snapshot.exists) {
        
        const filesQuerySnapshot = await DB.collection('files').where('parent', '==', folderRef.id).get();
        filesQuerySnapshot.forEach(async (file) => {
          await DB.collection('files').doc(file.id).delete();
        });
    
        const subfoldersArray = snapshot.data().subFolders || [];
  
        subfoldersArray.forEach(async (subfolderId) => {
          const subfolderRef = DB.collection('folders').doc(subfolderId);
          const subfolderBatch = DB.batch();
          await deleteFolder(subfolderRef, subfolderBatch);
          await subfolderBatch.commit();
          await dispatch(removeFolder(subfolderId));
        });

        batch.delete(folderRef);
      }
    } catch (error) {
      console.error('حدث خطأ: ', error.message);
      throw error;
    }
  };

  const folderRef = DB.collection('folders').doc(folderId);
  const mainBatch = DB.batch();

  try {
    await deleteFolder(folderRef, mainBatch);
    await mainBatch.commit();
    await removeFromParentSubFolders(folder.data.parent ,folderId)
    await dispatch(removeFolder(folderId));
    toast.success('Folder Deleted successfully!');
  } catch (error) {
    console.error('حدث خطأ أثناء حذف المجلد: ', error.message);
  }
};



