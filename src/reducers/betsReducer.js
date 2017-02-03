import {actionTypes} from '../actions/betsActions';

const INITIAL_STATE = {
    loading: true,
    bets: [],
    currentBet: {}
};

const findBets = (currentState, action) => {
    const {
        loading,
        payload = []
    } = action;

    return {
        loading,
        bets: payload
    };
};

const findBet = (currentState, action) => {
    const {
        loading,
        payload = {}
    } = action;

    return {
        loading,
        currentBet: payload
    };
};

const betsReducer = (currentState = INITIAL_STATE, action) => {

    switch (action.type) {
        case (actionTypes.FIND_BETS):
            return {
                ...currentState,
                ...findBets(currentState, action)
            };

        case (actionTypes.FIND_BET):
            return {
                ...currentState,
                ...findBet(currentState, action)
            };
        default:
            return currentState;
    }
};

export default betsReducer;
