import React from 'react';

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

        let items = this.state.bets.map(b => <li>{b.creator}</li>);

        return (
            <ul>
                {items}
            </ul>
        );
    }
}

export default Bets;