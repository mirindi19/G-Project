import './topbar.scss';
import { Button } from '@mui/material';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import HomeIcon from '@mui/icons-material/Home';

const Topbar = () => {
  return (
    <div className='topbar'>
    <div className="wrapper">
    <div className="log">
    <HomeIcon  className="icon"/>
     <h4>Genocide Survivors Student Association</h4>
    </div>
   <div className="items">
     <div className="item">
     <Button>
     <ExitToAppIcon className="icon"/>
     <span >Logout</span>
     </Button>
     </div>
   </div>
  </div>
    </div>
  )
}

export default Topbar