
const SET_SPOTS = 'spot/setSpots';
const GET_IMAGES = 'spot/getImages'

const setSpots = (spots) => {
    return {
        type: SET_SPOTS,
        spots
    }
}

const setImages = (images) => {
    return {
        type: GET_IMAGES,
        images
    }
}

export const getImages = (id) => async (dispatch) => {
    const response = await fetch(`/api/spots/${id}/images`);
    if(response.ok) {
        const images = await response.json();
        dispatch(setImages(images))
    }

}

export const getSpots = () => async (dispatch) => {
    const response = await fetch('/api/spots');
    if(response.ok) {
        const spots = await response.json();
        dispatch(setSpots(spots))
    }

}

const initialState = { spots: {} };

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
                allSpots
            }

        case GET_IMAGES:
            // console.log(action.images)
            // const allImages = {}
            // // action.images.forEach(image => {
            // //     if(!allImages[image.spotId]) {
            // //         allImages[image.spotId] = {[image.id]: image}
            // //     } else {
            // //         allImages[image.spotId] = {allImages[image.spotId] , [image.id]: image}
            // //     }
            // // })
            // return {
            //     ...state,
            //     allImages: {
            //         [action.images.spotId] : action.images.map(image => {image})
            //     }
            // }
        default:
            return state;
    }
};

export default spotReducer;
