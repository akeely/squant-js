import {actionTypes} from '../actions/tripsActions';

const INITIAL_STATE = {
    loading: true,
    trips: [],
    currentTrip: {}
};

const findTrips = (currentState, action) => {
    const {
        loading,
        payload = []
    } = action;

    return {
        loading,
        trips: payload
    };
};

const findTrip = (currentState, action) => {
    const {
        loading,
        payload = {}
    } = action;

    return {
        loading,
        currentTrip: payload
    };
};

const tripsReducer = (currentState = INITIAL_STATE, action) => {

    switch (action.type) {
        case (actionTypes.FIND_TRIPS):
            return {
                ...currentState,
                ...findTrips(currentState, action)
            };

        case (actionTypes.FIND_TRIP):
            return {
                ...currentState,
                ...findTrip(currentState, action)
            };
        default:
            return currentState;
    }
};

export default tripsReducer;
