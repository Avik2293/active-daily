import React from 'react';
import './Activitys.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHourglassHalf } from '@fortawesome/free-solid-svg-icons';

const Activitys = () => {
    return (
        <div className='activitys-container'>
            <div>
                <h1><FontAwesomeIcon icon={faHourglassHalf}></FontAwesomeIcon> Active Daily</h1>
                <h3>Select Today's Activity:</h3>
            </div>
            <div className='activitys'>

            </div>
        </div>
    );
};

export default Activitys;