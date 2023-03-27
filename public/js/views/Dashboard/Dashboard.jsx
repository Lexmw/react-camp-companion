import React from 'react';
import {useNavigate} from 'react-router-dom';
import DashContent from '../../components/DashContent/dashContent';
import Sidemenu from '../../components/SideMenu/sideMenu';

const Dashboard = () => {
  let navigate = useNavigate();

  return(
    <div>
        <Sidemenu />
        <DashContent />
    </div>
  )
}

export default Dashboard;
