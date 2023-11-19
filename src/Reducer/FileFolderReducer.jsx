import * as types from "../Redux/actionsTypes/filefoldersActionsTypes";

const initialState = {
    isLoading:true,
    currentFolder:"root",
    userFolders:[],
    userFiles:[],
    adminFolder:[],
    adminFiles:[],
}


const FileFolderReducer = ( state=initialState,action) =>{
    switch(action.type){
       case types.CREATE_FOLDER:
        return{
            ...state,
            userFolders: [...state.userFolders,action.payload],
        };
       case types.ADD_FOLDER:
        return{
            ...state,
            userFolders: action.payload,
        };
       case types.SET_LOADING:
        return{
            ...state,
            isLoading: action.payload,
        };

       default: return state;
    }
};

export default FileFolderReducer;