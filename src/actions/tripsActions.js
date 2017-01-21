import tripsApi from '../apis/tripsApi'

const NAMESPACE = 'trips';

const ACTION_TYPES = {
    FIND_TRIPS: `${NAMESPACE}:FIND_TRIPS`,
    FIND_TRIP: `${NAMESPACE}:FIND_TRIP`
};

export {ACTION_TYPES as actionTypes};

const findTrips = (groupId) => {

    return (dispatch) => {
        dispatch({
            loading: true,
            type: ACTION_TYPES.FIND_TRIPS
        });

        return tripsApi.getTrips(groupId)
            .then((data) => dispatch({
                loading: false,
                payload: data,
                type: ACTION_TYPES.FIND_TRIPS
            }));
    };
};

export {findTrips};

const findTrip = (groupId, tripId) => {

    return (dispatch) => {
        dispatch({
            loading: true,
            type: ACTION_TYPES.FIND_TRIP
        });

        return tripsApi.getTrip(groupId, tripId)
            .then((data) => dispatch({
                loading: false,
                payload: data,
                type: ACTION_TYPES.FIND_TRIP
            }));
    };
};

export {findTrip};

export default {
    findTrips,
    findTrip
};
