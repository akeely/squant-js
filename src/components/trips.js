import React, {
    Component
} from 'react';
import {
    connect
} from 'react-redux';

import {List, ListItem} from 'material-ui/List';

import tripsActions from '../actions/tripsActions'

const FAKE_GROUP = 'fakeGroupId';

const mapStateToProps = (state) => {
  return {
    ...state
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
      findTrips(groupId) {
          dispatch(tripsActions.findTrips(groupId));
      }
  };
};

class Trips extends Component {

    componentDidMount() {
        const {
            findTrips
        } = this.props;

        findTrips(FAKE_GROUP);
    }

    render() {

        const {
            trips
        } = this.props;

        const rows = trips.map((trip) =>
            (<ListItem key={trip.id}>{trip.date} Total won: {trip.totalWon}</ListItem>));

        return (
            <List>
                {rows}
            </List>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Trips);
