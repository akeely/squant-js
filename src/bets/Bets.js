import React from 'react';
import Alert from 'react-bootstrap/Alert';
import Container from 'react-bootstrap/Container';
import Bet from './Bet';

class Bets extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            bets: [],
            newBet: null,
            me: null
        };
        this.loadBets = this.loadBets.bind(this);
    }

    componentDidMount() {
        this.setState({newBet: this.props.newBet});

        this.loadMe();
        this.loadBets();
    }

    componentWillUnmount() {
        this.setState({newBet: null});
    }

    componentDidUpdate(prevProps) {
        if (prevProps.onlyMine !== this.props.onlyMine) {
            this.loadBets();
        }
    }

    render() {

        let items = this.state.bets.map(b => <Bet bet={b} me={this.state.me} reloadFunction={this.loadBets} />);

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

    loadBets() {

        const url = this.props.onlyMine ? '/api/1/bets/user/me' : '/api/1/bets';

        fetch(url)
          .then(response => response.json())
          .then(json => this.setState({ bets: json.data }));
    }

    loadMe() {

        fetch('/api/1/users/me')
          .then(response => {
              return response.json();
          })
          .then(json => {
              this.setState({ me: json });
          });
    }
}

export default Bets;