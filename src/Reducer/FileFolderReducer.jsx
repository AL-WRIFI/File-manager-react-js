

const initialState = {
    isLoading:false,
    currentFolder:"",
    userFolders:[],
    userFiles:[],
    adminFolder:[],
    adminFiles:[],
}


const FileFolderReducer = ( state=initialState,action) =>{
    switch(action.type){


       default: return state;
    }
};

export default FileFolderReducer;