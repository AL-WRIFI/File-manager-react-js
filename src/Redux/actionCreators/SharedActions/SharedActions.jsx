import fire from "../../../config/firebase";



export const addToParentSubFiles = async (fileId,parentId) =>{
    if(parentId === "root"){ return ;}
    
    try{
     const fileRef = fire.firestore().collection("folders").doc(parentId);
     const fileSnapshot = await fileRef.get();
     const subFilesArray = await fileSnapshot.get("subFiles") || [];
        
     await fileRef.update({
      subFiles: [...subFilesArray , fileId],
     })
     
    //  const subFilesA = await fileSnapshot.get("subFiles") || [];
    //  subFilesA.forEach((id)=>{
    //      console.log("---",id);
    //  })  
    }catch(error){
     console.error(" error " ,error);
    }
  }

  export const removeFromParentSubFiles = async (fileId,parentId) =>{
   
    if(parentId === "root"){ return ;}

    try{
     const fileRef = fire.firestore().collection("folders").doc(parentId);
     const fileSnapshot = await fileRef.get();
     const subFilesArray = await fileSnapshot.get("subFiles") || [];
     const subFiles = subFilesArray.filter((file)=> file !== fileId)
     await fileRef.update({
      subFiles: [...subFiles],
     })
  
    }catch(error){
     console.error(" error " ,error);
    }
}  

export const addToParentSubFolders = async (folderId,parentId) =>{
  if(parentId === "root"){ return ;}
  try{
   const folderRef = fire.firestore().collection("folders").doc(parentId);
   const folderSnapshot = await folderRef.get();
   const subfoldersArray = await folderSnapshot.get("subFolders") || [];

   await folderRef.update({
     subFolders : [...subfoldersArray , folderId],
   })

  }catch(error){
   console.error(error);
  }
}

export const removeFromParentSubFolders = async (folderId ,parentId) =>{
  if(parentId === "root"){ return ;}
  try{
   const folderRef = fire.firestore().collection("folders").doc(parentId);
   const folderSnapshot = await folderRef.get();
   const subfoldersArray = await folderSnapshot.get("subFolders") || [];
   const subFolders = subfoldersArray.filter((folder)=> folder !== folderId);
   await folderRef.update({
     subFolders : subFolders,
   })

  }catch(error){
   console.error(error);
  }
}

