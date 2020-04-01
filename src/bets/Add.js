import React from 'react';
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import {Typeahead} from 'react-bootstrap-typeahead';
import Redirect from 'react-router-dom/Redirect';

class Add extends React.Component {


    constructor(props) {
        super(props);
        this.state = { users: [],
          against: null,
          againstName: null,
          currency: 'beers',
          amount: 1.0,
          description: null,
          successAgainst: null
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleAgainstChange = this.handleAgainstChange.bind(this);
        this.handleCurrencyChange = this.handleCurrencyChange.bind(this);
        this.handleAmountChange = this.handleAmountChange.bind(this);
        this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
    }

    componentDidMount() {
        fetch('/api/1/users')
          .then(response => response.json())
          .then(json => this.setState({ users: json.data }));
    }

    handleSubmit(event) {

        const body = {
            against:     this.state.against,
            currency:    this.state.currency,
            amount:      this.state.amount,
            description: this.state.description
        };

        const csrfToken = document.querySelector('meta[name=_csrf]').content;
        const csrfHeader = document.querySelector('meta[name=_csrf_header]').content;

        event.preventDefault();
        fetch('/api/1/bets', {
            method: 'POST',
            credentials: 'include',
            headers: {
                'Content-type': 'application/json',
                [csrfHeader]: csrfToken
            },
            body: JSON.stringify(body)
        }).then(data => {
            console.log('Bet submitted');
            console.log(data);
            this.setState({successAgainst: this.state.againstName})
        });
    }

    handleAgainstChange(event) {
        if (event.length > 0) {
            const againstId = event[0].id;
            const againstName = event[0].name;
            this.setState({
                against: againstId,
                againstName: againstName
            });
        } else {
            this.setState({
                against: null,
                againstName: null
            });
        }
    }

    handleCurrencyChange(event) {
        this.setState({currency: event.target.value});
    }

    handleAmountChange(event) {
        this.setState({amount: event.target.value});
    }

    handleDescriptionChange(event) {
        this.setState({description: event.target.value});
    }


    render() {

        if (this.state.successAgainst != null) {

            return (
              <Redirect
                to={{
                    pathname: "/bets",
                    state: {newBet: this.state.successAgainst}
                }}
              />
            )
        }

        return (
          <div>
            <h3>Create a Bet</h3>
            <Form onSubmit={this.handleSubmit}>
                <Typeahead
                    id="addBetForm.against"
                    options={this.state.users}
                    labelKey={option => `${option.name} (${option.email})`}
                    placeholder="Bet against..."
                    onChange={this.handleAgainstChange}
                />
                <Form.Group controlId="addBetForm.currency">
                    <Form.Label>What to bet</Form.Label>
                    <Form.Control as="select" onChange={this.handleCurrencyChange}>
                        <option>beers</option>
                        <option>money</option>
                    </Form.Control>
                </Form.Group>
                <Form.Group controlId="addBetForm.against">
                    <Form.Label>How much to bet</Form.Label>
                    <Form.Control type="number" placeholder="Amount" onChange={this.handleAmountChange} />
                </Form.Group>
                <Form.Group controlId="addBetForm.description">
                    <Form.Label>Bet description</Form.Label>
                    <Form.Control as="textarea" rows="3" onChange={this.handleDescriptionChange} />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Create Bet
                </Button>
            </Form>
          </div>
        );
    }
}

export default Add;