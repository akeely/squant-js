import axios from 'axios';

const ROOT_URL = 'https://8dnkxv5wxh.execute-api.us-east-1.amazonaws.com/test';

export default {

    getTrips(groupId) {
        return axios.get(`${ROOT_URL}/${groupId}/trip`)
            .then((response) => response.data || [])
            .catch((error) => {
                console.log(error);
                return []
            })
    },

    getTrip(groupId, tripId) {
        return axios.get(`${ROOT_URL}/${groupId}/trip/${tripId}`)
            .then((response) => response.data || {})
            .catch((error) => {
                console.log(error);
                return {}
            })
    }
};
