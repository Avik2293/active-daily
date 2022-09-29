import React, { useState } from 'react';
import './SideInfo.css';
import myPic from '../../myPic.jpg';

import toast, { Toaster } from 'react-hot-toast';

const SideInfo = (props) => {
    const { totalTime } = props.totalTime;
    let [breakTime, setBreakTime] = useState(0);
    console.log(totalTime);

    const notify = () => toast('Hurrey, You Have Done It. You Completed Managing All Your Activitys.');

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
                    <button onClick={() => setBreakTime(10)}>10m</button>
                    <button onClick={() => setBreakTime(20)}>20m</button>
                    <button onClick={() => setBreakTime(30)}>30m</button>
                    <button onClick={() => setBreakTime(40)}>40m</button>
                    <button onClick={() => setBreakTime(50)}>50m</button>
                </div>
            </div>
            <div className='details'>
                <h4>Activity Details</h4>
                <h5 className='details-text'>Activity Time: {totalTime} Hours</h5>
                <h5 className='details-text'>Break Time: {breakTime} minutes</h5>
            </div>
            <div>
                <button className='complete-btn' onClick={notify}><h3>Activity Completed</h3></button>
                <Toaster />
            </div>
        </div>
    );

};

export default SideInfo;