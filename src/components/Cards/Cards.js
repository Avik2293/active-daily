import React from 'react';
import './Cards.css';

const Cards = (props) => {
    const {eachActivity, addTime} = props;
    const { activity, img, time } = eachActivity;
    // console.log(props);
    return (
        <div className='each-card'>
            <img src={img} alt="" />
            <div>
                <h5>{activity}</h5>
                <p>Time: {time} Hours</p>
            </div>
            <button className='card-btn' onClick={() => addTime(time)}>Add to List</button>
        </div>
    );
};

export default Cards;
