
const SET_SPOTS = 'spot/setSpots';


const setSpots = (spots) => {
    return {
        type: SET_SPOTS,
        spots
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
        default:
            return state;
    }
};

export default spotReducer;
