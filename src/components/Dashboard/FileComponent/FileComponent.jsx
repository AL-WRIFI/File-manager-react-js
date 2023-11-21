import React,{ Fragment, useEffect } from "react";
import { useNavigate, useParams } from "react-router";
import { shallowEqual, useSelector } from "react-redux";
import Header from "./Header";
import CodeEditor from "./CodeEditor";


function FileComponent(){

    const {fileId} = useParams();
    const navigate = useNavigate();
    const [fileData, setFileData] = useState("");
    const [prevFileData, setPrevFileData] = useState("");

    const { currentFile , isAuthenticated } = useSelector((state)=>({
       
        currentFile : state.fileFolder.userFiles.find(
            (file) =>(file.docId === fileId)),
        isAuthenticated: state.auth.isAuthenticated,
    }),shallowEqual)



  


 

//   useEffect(() => {
//     if (!isAuthenticated) {
//       navigate("/");
//     }
//   }, []);

//   useEffect(() => {
//     if (currentFile) {
//       setFileData(currentFile?.data?.data);
//       setPrevFileData(currentFile?.data?.data);
//     }
//   }, [currentFile, currentFile?.data?.data]);


    return(
        <Fragment>
            <Header fileName={currentFile.data.name}/>
            <CodeEditor  />
        </Fragment>
    )
        
    
}

export default FileComponent;