import {combineReducers } from "redux";
import AuthReducer from "./AuthReducer";
import FileFolderReducer from "./FileFolderReducer";

const RootReducers = combineReducers({ 
    auth:AuthReducer , 
    fileFolder:FileFolderReducer
}); 

export default RootReducers;