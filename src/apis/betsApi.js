import axios from 'axios';

const ROOT_URL = 'https://z9k4mo5zzh.execute-api.us-east-1.amazonaws.com/test';

export default {

    getBets(groupId) {
        return axios.get(`${ROOT_URL}/${groupId}/bet`)
            .then((response) => response.data || [])
            .catch((error) => {
                console.log(error);
                return []
            })
    },

    getBet(groupId, betId) {
        return axios.get(`${ROOT_URL}/${groupId}/bet/${betId}`)
            .then((response) => response.data || {})
            .catch((error) => {
                console.log(error);
                return {}
            })
    }
};
