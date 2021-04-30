import React from 'react';
import { useSelector } from 'react-redux';
// import * as spotReducer from '../../store/spot';
import './review.css';


function Reviews({review}) {
    const spot = useSelector(state => state.spots.currentSpot)


    if(!spot){
        return null
    }

    return (
        <div className='review__container'>
            <h3>{review.User.username}</h3>
            <p>{review.comment}</p>
            <span className='created-at'>{review.createdAt}</span>
        </div>
    );
}

export default Reviews;
