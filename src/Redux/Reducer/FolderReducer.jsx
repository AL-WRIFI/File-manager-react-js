import * as types from "../actionsTypes/FolderActionsType";

const initialState = {
    isLoading:true,
    currentFolder:"root",
    userFolders:[],
}


const FolderReducer = ( state=initialState,action) =>{
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
        
        case types.CHANGE_FOLDER:
        return{
            ...state,
            currentFolder: action.payload,
        };
        case types.COPY_FOLDERS_TOBUFFER:
        return{
            ...state,
            filesBuffer:action.payload,
        };
        case types.REMOVE_FOLDER:
        const updateFolder = state.userFolders.filter(
            (folder)=> folder.docId !== action.payload);
        return{
            ...state,
            userFolders: updateFolder,
        }; 
        case types.RENAME_FOLDER:
            const renamedFolder = state.userFolders.find( (folder) =>folder.docId === action.payload.docId);
            renamedFolder.data.name = action.payload.name;
            return{
                ...state,
                userFolders: state.userFolders.map((folder) =>
                folder.docId === action.payload.docId ? renamedFolder : folder ),
            };
        case types.MOVE_FOLDER:
            const movedFolder = state.userFolders.find( (folder) =>folder.docId === action.payload.docId);
            movedFolder.data = action.payload.data;
            return{
                ...state,
                userFolders: state.userFolders.map((folder) =>
                folder.docId === action.payload.docId ? movedFolder : folder
                ),
            };
       default: return state;
    }
};

export default FolderReducer;