import React from "react";
import './styles/dashboard.scss';

const UserDashboad = () => {
  return (
    <div className="dashboard">
        <div className="card">
            <h5>Wellness Goals</h5>
            <div className="card-item steps-card">
                <div className="top-sec">
                    <div className="col-6 step-count">
                        <div className="card-item-tital"><strong>Steps</strong></div>
                        <div className="card-item-data"><strong>1400</strong><span className="goal-set">/3000 steps</span></div>
                    </div>
                    <div className="col-6"></div>
                </div>
                <div className="progress-bar"></div>

            </div>
            <div className="card-item active-card">
                <div className="top-sec">
                    <div className="col-6 step-count">
                        <div className="card-item-tital"><strong>Active Time</strong></div>
                        <div className="card-item-data">
                            <span><strong>56</strong><span className="goal-set">/65 Mins</span></span>
                            <span>1712 Kcal|1.23 km</span>
                        </div>
                    </div>
                    <div className="col-6"></div>
                </div>
                <div className="progress-bar"></div>

            </div>
        </div>
    </div>
  );
};

export default UserDashboad; 