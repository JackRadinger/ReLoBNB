import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import * as spotReducer from '../../store/spot';
import './review.css';
import Moment from 'react-moment';


function Reviews({review, setUpdate}) {
    const spot = useSelector(state => state.spots.currentSpot)
    const dispatch = useDispatch();

    if(!spot){
        return null
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        dispatch(spotReducer.deleteReview(review.id))
        setUpdate('deleted')
    }

    return (
        <div className='review__container'>
            <h3 className='review-user'>{review.User.username}</h3>
            <p>{review.comment}</p>
            <Moment className='created-at' format="DD/MM/YYYY">{review.createdAt}</Moment>
            <button type='submit' onClick={handleSubmit}>Delete Review</button>
        </div>
    );
}

export default Reviews;
