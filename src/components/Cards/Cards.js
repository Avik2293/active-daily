import React from 'react';
import './Cards.css';

const Cards = (props) => {
    const { activity, img, time } = props.activity;
    // console.log(props);
    return (
        <div className='each-card'>
            <img src={img} alt="" />
            <div>
                <h5>{activity}</h5>
                <h6>Time: {time} Hours</h6>
            </div>
            <button>Add to List</button>
        </div>
    );
};

export default Cards;
