import React, { useEffect, useState } from 'react';
import { useParams, Redirect } from 'react-router-dom';
import Modal from 'react-modal';
import { useDispatch, useSelector } from 'react-redux';
import Reviews from '../Reviews/index';
import * as spotReducer from '../../store/spot';
import DatePicker from 'react-date-picker';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import './spot.css';
import MapContainer from '../GoogleMaps';

function Spot() {
    const dispatch = useDispatch();
    Modal.setAppElement('#root');
    const {id} = useParams();
    const [comment, setComment] = useState('');
    const [rating, setRating] = useState(1);
    const [openModal, setOpenModal] = useState(false);
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    const [update, setUpdate] = useState('old')

    const sessionUser = useSelector(state => state.session.user);
    const spot = useSelector(state => state.spots.currentSpot);
    const reviews = useSelector(state => state.spots.reviews);
    const updateComment = (e) => setComment(e.target.value);
    const updateRating = (e) => setRating(e.target.value);

    useEffect(()=> {
        window.scrollTo(0, 0);
    }, [])

    useEffect(() => {
        dispatch(spotReducer.getSpot(id));
        dispatch(spotReducer.getReviews(id));
    }, [dispatch, id, update])




    if (!sessionUser) return (
        <Redirect to="/login" />
    );
    if(!spot) {
            return null
        }
    if (!reviews) {
        return null
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const userId = sessionUser.id

        const payload = {
            comment,
            rating,
            id,
            userId
        }

        await dispatch(spotReducer.postReview(payload))
        setComment('')
    }

    const handleBook = async (e) => {
        e.preventDefault();
        const userId = sessionUser.id

        const payload = {
            userId: userId,
            spotId: id,
            startDate: startDate,
            endDate
        }

        await dispatch(spotReducer.postBooking(payload))
        dispatch(spotReducer.getReviews(id));
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

    const lat = spot.lat;
    const long = spot.long;

    const defaultCenter = {
        lat: Number(lat), lng: Number(long)
    }

    const val = checkAvailability();
    const newReviews = [...reviews]
    newReviews.reverse()

    return (
        <div className='spot__container'>
            <div className='img__container images'>
                <Carousel
                width='700px'
                className='carousel'
                dynamicHeight={true}>
                    {spot.Images.map((image) => {
                        return (
                            <div key={spot.id}>
                                <img alt='' src={image.url} />
                            </div>
                        )
                    })}
                </Carousel>
            </div>
            <div className='property__container description'>
                <div className='title'>{spot.title}</div>
                <h5 className='availability'>Availablity: {val}</h5>
                <div className='cost'>${spot.cost} / Day</div>
                <div className='city'>
                    <div >{spot.city}</div>
                </div>
                <div className='sub-description'>
                    <div className='description-title'>Description:</div>
                    <div>{spot.description}</div>
                </div>
                <div className='book-btn'>
                    <button className='book-btn-btn' onClick={() => {setOpenModal(true)}}>Book</button>
                </div>
            </div>
            <div>
                <Modal
                    isOpen={openModal}
                    onRequestClose={() => {setOpenModal(false)}}
                    contentLabel='Book?'
                    className='modal'
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
            <div className='reviews'>
                <div >
                    <form className='review' onSubmit={handleSubmit}>
                        <div className='review-title'>
                            <label className='review-title'>
                                Review
                            </label>
                        </div>
                        <div className='rating-container'>
                            <label className='rating-label'>
                                Rating
                                <select className='rating' onChange={updateRating}>
                                    <option value='1'>1</option>
                                    <option value='2'>2</option>
                                    <option value='3'>3</option>
                                    <option value='4'>4</option>
                                    <option value='5'>5</option>
                                </select>
                            </label>
                        </div>
                        <div className='review-text-area'>
                            <textarea placeholder='Review' className='review-text' type='text-area' value={comment} onChange={updateComment} required></textarea>
                        </div>
                        <button className='submit-review'type='submit'>Submit Review</button>
                    </form>
                </div>
                <div className='google'>
                    <MapContainer defaultCenter={defaultCenter}/>
                </div>
                <div className='review-list'>
                    {newReviews.map(review => {
                        return (
                            <Reviews setUpdate={setUpdate} review={review} key={spot.id + review.id}/>
                        )
                    })}
                </div>
            </div>
        </div>
    );
}

export default Spot;
