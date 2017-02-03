import React, {
    Component
} from 'react';
import {
    connect
} from 'react-redux';

import {List, ListItem} from 'material-ui/List';

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

        const rows = bets.map((bet) =>
            (<ListItem key={bet.id}>{bet.name}: Status: {bet.status}</ListItem>));

        return (
            <List>
                {rows}
            </List>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Bets);
