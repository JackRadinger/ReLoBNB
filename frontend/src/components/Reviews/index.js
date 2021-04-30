import React from 'react';
import { useSelector } from 'react-redux';
// import * as spotReducer from '../../store/spot';
import './review.css';
import Moment from 'react-moment';


function Reviews({review}) {
    const spot = useSelector(state => state.spots.currentSpot)


    if(!spot){
        return null
    }

    return (
        <div className='review__container'>
            <h3 className='review-user'>{review.User.username}</h3>
            <p>{review.comment}</p>
            <Moment className='created-at' format="DD/MM/YYYY">{review.createdAt}</Moment>
        </div>
    );
}

export default Reviews;
