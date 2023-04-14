import './nav.scss';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';

const Nav = () => {
  return (
    <div className='nav'>
    <div className="wrapper">
    <div className="search">
  
</div>
   <div className="items">
     <div className="item">
     <ExitToAppIcon className="icon"/>
     <span >Logout</span>
     </div>
   </div>
  </div>
    </div>
  )
}

export default Nav