import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Modal from 'react-modal';
import { useDispatch, useSelector } from 'react-redux';
import Reviews from '../Reviews/index';
import * as spotReducer from '../../store/spot';
import DatePicker from 'react-date-picker';
import './spot.css';

function Spot() {
    const dispatch = useDispatch();
    Modal.setAppElement('#root');
    const {id} = useParams();
    const [comment, setComment] = useState('');
    const [rating, setRating] = useState(1);
    const [openModal, setOpenModal] = useState(false);
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date())


    const userId = useSelector(state => state.session.user.id)
    const spot = useSelector(state => state.spots.currentSpot);
    const reviews = useSelector(state => state.spots.reviews);
    const updateComment = (e) => setComment(e.target.value);
    const updateRating = (e) => setRating(e.target.value);

    useEffect(() => {
        dispatch(spotReducer.getSpot(id));
        dispatch(spotReducer.getReviews(id));
    }, [dispatch, id])


    if(!spot) {
        return null
    }
     if (!reviews) {
        return null
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        const payload = {
            comment,
            rating,
            id,
            userId
        }

        await dispatch(spotReducer.postReview(payload))
    }

    const handleBook = async (e) => {
        e.preventDefault();

        const payload = {
            userId: userId,
            spotId: id,
            startDate: startDate,
            endDate
        }

        await dispatch(spotReducer.postBooking(payload))

    }

    const customStyles = {
        content : {
          top                   : '50%',
          left                  : '50%',
          right                 : 'auto',
          bottom                : 'auto',
          marginRight           : '-50%',
          transform             : 'translate(-50%, -50%)',
          width                 : '400px',
          height                : '400px'
        }
    };

    const checkAvailability = () => {
        if(!spot.Bookings.length) {
            return 'Available'
        } else {
            return 'Booked'
        }
    }

    const val = checkAvailability();


    return (
        <div className='spot__container'>
            <div className='img__container'>
                <img src={spot.Images[0].url} alt="Didn't work huh? Looks like AWS doesn't want you to view this."/>
                <img src={spot.Images[1].url} alt="Didn't work huh? Looks like AWS doesn't want you to view this."/>
                <img src={spot.Images[2].url} alt="Didn't work huh? Looks like AWS doesn't want you to view this."/>
            </div>
            <div className='property__container'>
                <div>{spot.address}</div>
                <h5 >Availablity: {val}</h5>
                <div>{spot.cost} / Day</div>
                <div>
                    <div>{spot.city}</div>
                    <div>{spot.description}</div>
                </div>
            </div>
            <div>
                <button onClick={() => {setOpenModal(true)}}>Book</button>
                <Modal
                    isOpen={openModal}
                    onRequestClose={() => {setOpenModal(false)}}
                    contentLabel='Book?'

                    style={customStyles}
                >
                    <form onSubmit={handleBook}>
                        <h3>Book {spot.city}?</h3>
                        <div>
                            Start Date
                            <DatePicker
                                className='datePicker'
                                onChange={setStartDate}
                                value={startDate}
                            />
                        </div>
                        <div>
                            End Date
                            <DatePicker
                                className='datePicker'
                                onChange={setEndDate}
                                value={endDate}
                            />
                        </div>
                        <button onClick={() => {setOpenModal(false)}}>Close</button>
                        <button type='submit'>Book</button>
                    </form>
                </Modal>
            </div>
            <div>
                <form onSubmit={handleSubmit}>
                    <label>
                        Review
                    </label>
                    <div>
                        <textarea type='text-area' value={comment} onChange={updateComment} required></textarea>
                    </div>
                    <label>
                        Rating
                        <select onChange={updateRating}>
                            <option value='1'>1</option>
                            <option value='2'>2</option>
                            <option value='3'>3</option>
                            <option value='4'>4</option>
                            <option value='5'>5</option>
                        </select>
                    </label>
                    <button type='submit'>Submit Review</button>
                </form>
            </div>
            <div>
                {reviews.map(review => {
                    return (
                        <Reviews review={review} key={spot.id + review.id}/>
                    )
                })}
            </div>
        </div>
    );
}

export default Spot;
