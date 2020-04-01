import React from 'react';
import Alert from 'react-bootstrap/Alert';
import Container from 'react-bootstrap/Container';
import Bet from './Bet';

class Bets extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            bets: [],
            newBet: null
        };
    }

    componentDidMount() {
        console.log(this.props);
        this.setState({newBet: this.props.newBet});

        fetch('/api/1/bets')
            .then(response => response.json())
            .then(json => this.setState({ bets: json.data }));
    }

    render() {



        let items = this.state.bets.map(b => <Bet bet={b} />);

        return (
          <div>
            {this.state.newBet != null &&
              <Alert variant="success" onClose={() => this.setState({newBet: null})} dismissible>
                  Created bet against {this.state.newBet}.
              </Alert>
            }
            <Container>
                {items}
            </Container>
          </div>
        );
    }
}

export default Bets;