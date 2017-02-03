import betsApi from '../apis/betsApi'

const NAMESPACE = 'bets';

const ACTION_TYPES = {
    FIND_BETS: `${NAMESPACE}:FIND_BETS`,
    FIND_BET:  `${NAMESPACE}:FIND_BET`
};

export {ACTION_TYPES as actionTypes};

const findBets = (groupId) => {

    return (dispatch) => {
        dispatch({
            loading: true,
            type: ACTION_TYPES.FIND_BETS
        });

        return betsApi.getBets(groupId)
            .then((data) => dispatch({
                loading: false,
                payload: data,
                type: ACTION_TYPES.FIND_BETS
            }));
    };
};

export {findBets};

const findBet = (groupId, betId) => {

    return (dispatch) => {
        dispatch({
            loading: true,
            type: ACTION_TYPES.FIND_BET
        });

        return betsApi.getBet(groupId, betId)
            .then((data) => dispatch({
                loading: false,
                payload: data,
                type: ACTION_TYPES.FIND_BET
            }));
    };
};

export {findBet};

export default {
    findBets,
    findBet
};
