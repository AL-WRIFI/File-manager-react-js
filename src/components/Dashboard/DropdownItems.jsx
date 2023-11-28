import Dropdown from 'react-bootstrap/Dropdown';
import { useDispatch } from 'react-redux';
import { copyFile } from '../../Redux/actionCreators/filefoldersActions';

function DropdownItems({file}) {
  const dispatch = useDispatch();
  
  return (
    <Dropdown>
      <Dropdown.Toggle  className="btn  btn-sm btn-light dropdown-toggle p-1 " />
        
      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">Rename</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Move</Dropdown.Item>
        <Dropdown.Item onClick={()=>{dispatch(copyFile(file))}} >Copy</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Cut</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Remove</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default DropdownItems;