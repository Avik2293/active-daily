import React from 'react';
import './SideInfo.css';
import myPic from '../../myPic.jpg';

const SideInfo = () => {


    return (
        <div className='side-container'>
            <div className='my-info'>
                <img src={myPic} alt="" />
                <div className='info-text'>
                    <h4>Avik Sarker</h4>
                    <h4><small>Dhaka, Bangladesh</small></h4>
                </div>
            </div>
            <div className='info-box'>
                <p>Height: 5.6f</p>
                <p>Weight: 78kg</p>
                <p>Age: 29Years</p>
            </div>
            <div className='break-time'>
                <h4>Its Break Time: </h4>
                <div className='break-btn'>
                    <button>10m</button>
                    <button>20m</button>
                    <button>30m</button>
                    <button>40m</button>
                    <button>50m</button>
                </div>
            </div>
            <div className='details'>
                <h4>Activity Details</h4>
                <h5 className='details-text'>Activity Time: {} Hours</h5>
                <h5 className='details-text'>Break Time: {} minutes</h5>
            </div>
           <button className='complete-btn'><h3>Activity Completed</h3></button>
        </div>
    );
};

export default SideInfo;