import React from 'react';
import Row from 'react-bootstrap/Row';

class Bet extends React.Component {

    render() {

        let bet = this.props.bet;

        return (
            <Row>
                <p>{bet.creator} bet {bet.against} {bet.amount} {bet.currency} for {bet.description}.</p>
            </Row>
        );
    }

}

export default Bet;