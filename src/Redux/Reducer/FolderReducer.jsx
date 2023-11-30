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
        case types.REMOVE_FOLDER:
        const updateFolder = state.userFolders.filter(
            (folder)=> folder.docId !== action.payload);
        return{
            ...state,
            userFolders: updateFolder,
        }; 
        case types.MOVE_FOLDER:
            const movedfolder = state.userFolders.find( (folder) =>folder.docId === action.payload.docId);
            movedfolder.data = action.payload.data,
            console.log(movedfolder);
            return{
                ...state,
                userFolders: state.userFolders.map((folder) =>
                folder.docId === action.payload.docId ? movedfolder : folder
                ),
            };
       default: return state;
    }
};

export default FolderReducer;