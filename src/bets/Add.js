import React from 'react';
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import {Typeahead} from 'react-bootstrap-typeahead';

class Add extends React.Component {


    constructor(props) {
        super(props);
        this.state = { users: []};
    }

    componentDidMount() {
        fetch('/api/1/users')
          .then(response => response.json())
          .then(json => this.setState({ users: json.data }));
    }


    render() {


        return (
          <div>
            <h3>Create a Bet</h3>
            <Form>
                <Typeahead
                    id="against-typeahead"
                    options={this.state.users}
                    labelKey="name"
                    placeholder="Bet against..."
                />
                <Form.Group controlId="addBetForm.currency">
                    <Form.Label>What to bet</Form.Label>
                    <Form.Control as="select">
                        <option>beers</option>
                        <option>money</option>
                    </Form.Control>
                </Form.Group>
                <Form.Group controlId="addBetForm.against">
                    <Form.Label>How much to bet</Form.Label>
                    <Form.Control type="number" placeholder="Amount" />
                </Form.Group>
                <Form.Group controlId="addBetForm.description">
                    <Form.Label>Bet description</Form.Label>
                    <Form.Control as="textarea" rows="3" />
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