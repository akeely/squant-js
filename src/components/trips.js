import React, {
    Component
} from 'react';
import {
    connect
} from 'react-redux';

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
            (<li className="list-group-item" key={trip.id}>{trip.date} Total won: {trip.totalWon}</li>));

        return (
            <ul className="list-group">
                {rows}
            </ul>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Trips);
