import Dropdown from 'react-bootstrap/Dropdown';
import { useDispatch } from 'react-redux';
import { deleteFile ,copyFileToBuffer} from '../../Redux/actionCreators/FileActions';

function DropdownItems({file}) {
  const dispatch = useDispatch();
  
  return (
    <Dropdown>
      <Dropdown.Toggle  className="btn  btn-sm btn-light dropdown-toggle p-1 " />
        
      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">Rename</Dropdown.Item>
        <Dropdown.Item onClick={()=>{dispatch(copyFileToBuffer(file))}} >Copy</Dropdown.Item>
        <Dropdown.Item onClick={()=>{dispatch(copyFileToBuffer(file))}} >Cut</Dropdown.Item>
        <Dropdown.Item onClick={()=>{dispatch(deleteFile(file))}}>Delete</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default DropdownItems;