import React from 'react';
import Activitys from '../Activitys/Activitys';
import SideInfo from '../SideInfo/SideInfo';
import './FullPage.css'

const FullPage = () => {
    return (
        <div className='page-view'>
            <Activitys></Activitys>
            <SideInfo></SideInfo>
        </div>
    );
};

export default FullPage;