import React from "react";
import LeftMenu from './utils/left-menu';
// import './styles/index.scss';
const UserGoals= () => {
  return (<div className="main">
            <div className="row">
                <LeftMenu className="col-2" /> 
                <div className="col-10">USer Dashboard</div>
                </div>
            </div>
  );
};

export default UserGoals; 