import React, { useEffect, useState } from 'react';
// import Activitys from '../Activitys/Activitys';
import Blogs from '../Blogs/Blogs';
import Cards from '../Cards/Cards';
import Header from '../Header/Header';
import SideInfo from '../SideInfo/SideInfo';

import './FullPage.css'

const FullPage = () => {
    const [activitys, setActivitys] = useState([]);

    useEffect(() => {
        fetch('activity.json')
            .then(res => res.json())
            // .then(data => console.log(data))
            .then(data => setActivitys(data))
    }, [])
    
    return (
        <div className='page-view'>
            <div>
                <Header></Header>
                <div className='cards-container'>
                {
                    // activitys.map(activity => <Activitys activity={activity} key={activity.id}></Activitys>)
                    activitys.map(activity => <Cards activity={activity} key={activity.id}></Cards>)
                }
                </div>
                <Blogs></Blogs>
            </div>
            <SideInfo></SideInfo>
        </div>
    );
};

export default FullPage;