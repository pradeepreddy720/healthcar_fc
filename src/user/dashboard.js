import React from "react";
import LeftMenu from './left-menu';
import './styles/index.scss';
const UserDashboad = () => {
  return (<div className="main">
            <div className="row">
                <LeftMenu className="col-2" /> 
                <div className="col-10">USer Dashboard</div>
                </div>
            </div>
  );
};

export default UserDashboad; 