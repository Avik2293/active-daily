import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHourglassHalf } from '@fortawesome/free-solid-svg-icons';
import './Header.css';

const Header = () => {
    return (
        <div>
            <h1><FontAwesomeIcon icon={faHourglassHalf}></FontAwesomeIcon> Active Daily</h1>
            <h3>Select Today's Activity:</h3>
        </div>
    );
};

export default Header;