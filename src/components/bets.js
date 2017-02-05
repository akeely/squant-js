import React, {
    Component
} from 'react';
import {
    connect
} from 'react-redux';

import Bet from './bet';

import betsActions from '../actions/betsActions'

const FAKE_GROUP = 'fakeGroupId';

const mapStateToProps = (state) => {
  return {
    ...state.betsData
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
      findBets(groupId) {
          dispatch(betsActions.findBets(groupId));
      }
  };
};

class Bets extends Component {

    componentDidMount() {
        const {
            findBets
        } = this.props;

        findBets(FAKE_GROUP);
    }

    render() {

        const {
            bets
        } = this.props;

        const betCards = bets.map((bet) => (
                <Bet bet={bet} key={bet.id} />
            )
        );

        return (
            <div>
                {betCards}
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Bets);
