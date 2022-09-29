import React, { useEffect, useState } from 'react';
import Blogs from '../Blogs/Blogs';
import Cards from '../Cards/Cards';
import Header from '../Header/Header';
import SideInfo from '../SideInfo/SideInfo';

import './FullPage.css'

const FullPage = () => {
    const [activitys, setActivitys] = useState([]);
    let [totalTime, setTotalTime] = useState(0);

    useEffect(() => {
        fetch('activity.json')
            .then(res => res.json())
            // .then(data => console.log(data))
            .then(data => setActivitys(data))
    }, [])
    
    const addTime = (activityTime) => {
        let newTotalTime;
        newTotalTime = totalTime + activityTime;
        setTotalTime(newTotalTime);
    };

    return (
        <div className='page-view'>
            <div>
                <Header></Header>
                <div className='cards-container'>
                {
                    activitys.map(activity => <Cards eachActivity={activity} key={activity.id} addTime={addTime}></Cards>)
                }
                </div>
                <Blogs></Blogs>
            </div>
            <SideInfo totalTime={totalTime}></SideInfo>
        </div>
    );
};

export default FullPage;