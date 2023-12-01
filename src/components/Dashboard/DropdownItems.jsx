import Dropdown from 'react-bootstrap/Dropdown';
import { useDispatch } from 'react-redux';
import { deleteFile ,copyItemToBuffer} from '../../Redux/actionCreators/FileActions';
import { deleteFolderAndSubfolders } from '../../Redux/actionCreators/FolderActions';

function DropdownItems({item}) {
  const dispatch = useDispatch();
  return (
    <Dropdown >
      <Dropdown.Toggle  className="btn-sm btn-light dropdown-toggle p-1 " />
        
      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">Rename</Dropdown.Item>
        <Dropdown.Item onClick={()=>{dispatch(copyItemToBuffer({item,action:"copy"}))}} >Copy</Dropdown.Item>
        <Dropdown.Item onClick={()=>{dispatch(copyItemToBuffer({item,action:"cut"}))}} >Cut</Dropdown.Item>
        <Dropdown.Item onClick={()=>{dispatch(item.data.type.startsWith('folder')? 
           deleteFolderAndSubfolders(item) : deleteFile(item) )}}>Delete</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default DropdownItems;