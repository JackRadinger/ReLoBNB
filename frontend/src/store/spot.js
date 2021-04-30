import { csrfFetch } from './csrf';

const SET_SPOTS = 'spot/setSpots';
const GET_SPOT = 'spot/getSpot';
const GET_REVIEWS = 'spot/getReviews';
const POST_REVIEW = 'spot/postReview';
const POST_BOOKING = 'spot/postBooking';
const SORT_SPOTS = 'spots/sortSpots';
const DELETE_REVIEW = 'spots/deleteReview';

const setSpots = (spots) => {
    return {
        type: SET_SPOTS,
        spots
    }
}


const setSpot = (spot) => {
    return {
        type: GET_SPOT,
        spot
    }
}

const setReviews = (reviews) => {
    return {
        type: GET_REVIEWS,
        reviews
    }
}

const setReview = (review) => {
    return {
        type: POST_REVIEW,
        review
    }
}

const setBooking = (booking) => {
    return {
        type: POST_BOOKING,
        booking
    }
}

const setDeletedReview = (reviewInfo) => {
    return {
        type: DELETE_REVIEW,
        reviewInfo
    }
}

export const sortSpots = () => {
    return {
        type: SORT_SPOTS,
    }
}

export const getSpot = (id) => async (dispatch) => {
    const response = await fetch(`/api/spots/${id}`);
    if(response.ok) {
        const spot = await response.json();
        dispatch(setSpot(spot))
    }

}

export const getSpots = () => async (dispatch) => {
    const response = await fetch('/api/spots');
    if(response.ok) {
        const spots = await response.json();
        dispatch(setSpots(spots))
    }
}

export const getReviews = (id) => async (dispatch) => {
    const response = await fetch(`/api/spots/${id}/reviews`);
    if(response.ok) {
        const reviews = await response.json();
        dispatch(setReviews(reviews))
    }
}

export const postReview = (reviewInfo) => async (dispatch) => {
    const response = await csrfFetch(`/api/spots/${reviewInfo.id}/post/review`, {
        method: 'POST',
        body: JSON.stringify(reviewInfo),
        headers: {
            'Content-Type': 'application/json'
        }
    })

    if(response.ok) {
        const review = await response.json();
        dispatch(setReview(review))
        return review
    }
}

export const postBooking = (bookingInfo) => async (dispatch) => {
    const response = await csrfFetch(`/api/spots/bookSpot`, {
        method: 'POST',
        body: JSON.stringify(bookingInfo),
        headers: {
            'Content-Type': 'application/json'
        }
    })

    if(response.ok) {
        const booked = await response.json();
        dispatch(setBooking(booked))
        return booked
    }
}

export const deleteReview = (id) => async (dispatch) => {
    const response = await csrfFetch(`/api/spots/review/${id}`, {
        method: 'DELETE'
    });

    if(response.ok) {
        // const review = await response.json();
        // console.log('deleted review', review)
        dispatch(setDeletedReview(id))
    }

}

const sortList = (list) => {
    return list.sort((spot1, spot2) => {
      return spot1.cost - spot2.cost;
    })
};


const initialState = {};

const spotReducer = (state = initialState, action) => {
    let newState;
    switch (action.type) {
        case SET_SPOTS:
            const allSpots = [];
            action.spots.forEach(spot => {
                allSpots.push(spot)
            });

            return {
                ...action.spots,
                ...state,
                allSpots,
            }

        case GET_SPOT:
            const spotState = { ...state }
            spotState.currentSpot = action.spot
            return spotState
        case GET_REVIEWS:
            const reviews = action.reviews
            return {
                ...state,
                reviews
            }
        case POST_REVIEW:
            newState = { ...state }
            newState.reviews = [...state.reviews, action.review]
            return newState
        case POST_BOOKING:
            newState = { ...state }
            break
        case SORT_SPOTS:
            newState = { ...state }
            newState.allSpots = sortList(newState.allSpots)
            return newState
        case DELETE_REVIEW:
            newState = { ...state }
            const newReviews = newState.reviews.filter(review => review.id !== action.reviewInfo);
            return newState.reviews = [...newReviews]
        default:
            return state;
    }
};

export default spotReducer;
