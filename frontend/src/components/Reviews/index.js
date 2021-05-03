import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import * as spotReducer from '../../store/spot';
import './review.css';
import Moment from 'react-moment';


function Reviews({review, setUpdate}) {
    const spot = useSelector(state => state.spots.currentSpot)
    const sessionUser = useSelector(state => state.session.user);
    const dispatch = useDispatch();
    const [auth, setAuth] = useState(true)


    useEffect(() => {
        if(sessionUser.id === review.User.id) {
            setAuth(false)
        }
    }, [sessionUser.id, review.User.id])

    if(!spot){
        return null
    }

    const randomNumber = () => {
        return `${Math.random()*10}`
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        dispatch(spotReducer.deleteReview(review.id))
        setUpdate(randomNumber())
    }

    return (
        <div className='review__container'>
            <h3 className='review-user'>{review.User.username}</h3>
            <p>{review.comment}</p>
            <Moment className='created-at' format="DD/MM/YYYY">{review.createdAt}</Moment>
            <button type='button' hidden={auth} onClick={handleSubmit}>Delete Review</button>
        </div>
    );
}

export default Reviews;
