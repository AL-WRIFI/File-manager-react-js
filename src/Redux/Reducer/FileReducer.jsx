import * as types from "../actionsTypes/FileActionsType";

const initialState = {
    userFiles:[],
    filesBuffer:[],
}


const FileFolderReducer = ( state=initialState,action) =>{
    switch(action.type){
        case types.SET_LOADING:
        return{
            ...state,
            isLoading: action.payload,
        };
        case types.CREATE_FILES:
        return{
            ...state,
            userFiles: [...state.userFiles,action.payload],
        };
        case types.ADD_FILES:
        return{
            ...state,
            userFiles: action.payload,
        };
        case types.REMOVE_FILE:
        const updateFiles = state.userFiles.filter(
            (file)=> file.docId !== action.payload);
        return{
            ...state,
            userFiles: updateFiles,
        };
        
       case types.COPY_FILES_TOBUFFER:
        return{
            ...state,
            filesBuffer:action.payload,
        };
      
        case types.SET_FILE_DATA:
            const { fileId, data } = action.payload;
            const allFiles = state.userFiles;
            const currentFile = allFiles.find((file) => file.docId === fileId);
            currentFile.data.data = data;
            return {
                ...state,
                userFiles: state.userFiles.map((file) =>
                file.docId === fileId ? currentFile : file
                ),
            }; 

       default: return state;
    }
};

export default FileFolderReducer;