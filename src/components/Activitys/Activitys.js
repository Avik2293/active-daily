import React from 'react';
import './Activitys.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHourglassHalf } from '@fortawesome/free-solid-svg-icons';
import Blogs from '../Blogs/Blogs';

const Activitys = () => {
    return (
        <div className='activitys-container'>
            <div>
                <h1><FontAwesomeIcon icon={faHourglassHalf}></FontAwesomeIcon> Active Daily</h1>
                <h3>Select Today's Activity:</h3>
            </div>
            <div className='activitys'>

            </div>
            <Blogs></Blogs>
        </div>
    );
};

export default Activitys;