import React from "react";
import { Link } from "react-router-dom";
import './styles/left-menu.scss';
const LeftMenu = () => {
  return (
    <div className="col-2 left-menu"> 
        <div className="menu-items">
            <div className="menu-item">
                <Link className="link" to="/user/dashboard">Dashboard</Link>
            </div>
            <div className="menu-item">
                <Link className="link" to="/user/profile">My Profile</Link>
            </div>
            <div className="menu-item">
                <Link className="link" to="/user/goals">Welness Goals</Link>
            </div>
            <div className="menu-item">
                <Link className="link" to="/user/messages">messages</Link>
            </div>
            <div className="menu-item">
                <Link className="link" to="/logout">Logout</Link>
            </div>
        </div>
    </div>
  );
};

export default LeftMenu;