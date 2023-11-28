import * as types from "../Redux/actionsTypes/filefoldersActionsTypes";

const initialState = {
    isLoading:true,
    currentFolder:"root",
    userFolders:[],
    userFiles:[],
    copyFileBuffer:[],
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
       case types.CHANGE_FOLDER:
        return{
            ...state,
            currentFolder: action.payload,
        }
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
       case types.COPY_FILES_TOBUFFER:
        return{
            ...state,
            copyFileBuffer:action.payload,
        };
        // case types.PASTE_FILES:
        // return{
        //     ...state,
        //     copyFile: action.payload,
        // };
        // case types.UNSET_SELECTED_FILES:
        //     return {...state, selectedFiles: []};

        // case types.SET_SELECTED_FILES:
        //         var selectedFilesNew = [...state.selectedFiles];
        //         var index = selectedFilesNew.indexOf(action.item);
        //         if (index !== -1) {
        //                 selectedFilesNew.splice(index, 1);
        //             } else {
        //                 selectedFilesNew = [...selectedFilesNew, action.item];
        //         }
        //     return {...state, selectedFiles: selectedFilesNew };
        

        // case types.SELECT_ALL_FILES:
        //         var newSelected = state.filesList.reduce(function(result, file) {
        //             if (file.private !== true) {
        //               result.push(file);
        //             }
        //             return result;
        //           }, []);
        //     return {...state, selectedFiles:newSelected};


        // case types.INVERSE_SELECTED_FILES:
        //         var selectedFiles = state.selectedFiles;
        //         const inversedSelected = state.filesList.reduce((nextSelected, file) => {
        //             if (!selectedFiles.find(selectedFile => selectedFile.id === file.id)) {
        //               nextSelected.push(file);
        //             }
        //             return nextSelected;
        //         }, []);

        //     return {...state, selectedFiles:inversedSelected};


        // case types.COPY_FILES_TOBUFFER:
        //         var bufferedItems = {
        //             type: 'copy',
        //             files: state.selectedFiles
        //         }
        //     return {...state, bufferedItems, selectedFiles:[]};


        // case types.CUT_FILES_TOBUFFER:
        //         bufferedItems = {
        //             type: 'cut',
        //             files: state.selectedFiles
        //         }
        //     return {...state, bufferedItems, selectedFiles:[]};

        // case types.CLEAR_FILES_TOBUFFER:
        //         bufferedItems = {
        //             type: '',
        //             files: []
        //         }
        //     return {...state, bufferedItems};
            
        // case types.PASTE_FILES:
        //         bufferedItems = {
        //             type: '',
        //             files: []
        //         }
        //     return {...state, bufferedItems};




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