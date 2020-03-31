import React from 'react';
import Container from "react-bootstrap/Container";
import Bet from './Bet';

class Bets extends React.Component {

    constructor(props) {
        super(props);
        this.state = { bets: []};
    }

    componentDidMount() {
        fetch('/api/1/bets')
            .then(response => response.json())
            .then(json => this.setState({ bets: json.data }));
    }

    render() {

        let items = this.state.bets.map(b => <Bet bet={b} />);

        return (
            <Container>
                {items}
            </Container>
        );
    }
}

export default Bets;