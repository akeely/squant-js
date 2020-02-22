import React from 'react';
import Navbar from 'react-bootstrap/Navbar';

class SquantNav extends React.Component {

    render() {

        let bet = this.props.bet;

        return (
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand>SQU❄NT</Navbar.Brand>
            </Navbar>
        );
    }

}

export default SquantNav;