import React from 'react';
import "./sidebar.scss";
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import ProductionQuantityLimitsTwoToneIcon  from '@mui/icons-material/PersonOutlineOutlined';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import BungalowIcon from '@mui/icons-material/Bungalow';
const Sidebar = () => {
  return (
    <div className='sidebar'>
    <div className="top">
        <span className='logo'>AERG</span>
    </div>
    <hr/>
    <div className="center">
        <ul>
  
            <p className="title">MAIN</p>
            <li>
                  <DashboardIcon className="icon"/>
                <span>dashboard</span>
            </li>

            <li>
            <ProductionQuantityLimitsTwoToneIcon className="icon" />
                <span>Organisation</span>
            </li>

            <li>
            <PersonOutlineOutlinedIcon className="icon"/>
                <span>Users</span>
            </li>


            <li>
                <BorderColorIcon className="icon"/>
                <span>Academic</span>
            </li>

            <li>
                <BungalowIcon className="icon"/>
                <span>Employee</span>
            </li>

            <li>
            <ProductionQuantityLimitsTwoToneIcon className="icon" />
                <span>Academic </span>
            </li>

            <li>
            <ProductionQuantityLimitsTwoToneIcon className="icon" />
                <span>Women Category</span>
            </li>
        </ul>
    </div>
</div>
  )
}

export default Sidebar