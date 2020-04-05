import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Button from "react-bootstrap/Button";

class Bet extends React.Component {

  constructor(props) {
    super(props);
    this.markPaid = this.markPaid.bind(this);
    this.markWinner = this.markWinner.bind(this);
  }


  render() {

    let bet = this.props.bet;

    return (
      <Row className="p-1 align-items-center">
        <Col className="align-items-center justify-content-end">
          {bet.creator.name} bet {bet.against.name} {bet.amount} {bet.currency} for {bet.description}.
        </Col>
        <Winner bet={bet} me={this.props.me} paidFunction={this.markPaid} winnerFunction={this.markWinner}/>
      </Row>
    );
  }

  markPaid() {
    const body = {};

    const csrfToken = document.querySelector('meta[name=_csrf]').content;
    const csrfHeader = document.querySelector('meta[name=_csrf_header]').content;

    fetch(`/api/1/bets/${this.props.bet.id}/paid`, {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-type': 'application/json',
        [csrfHeader]: csrfToken
      },
      body: JSON.stringify(body)
    }).then(data => {
      this.props.reloadFunction();
    });
  }

  markWinner(winnerId) {
    const body = { id: winnerId };

    const csrfToken = document.querySelector('meta[name=_csrf]').content;
    const csrfHeader = document.querySelector('meta[name=_csrf_header]').content;

    fetch(`/api/1/bets/${this.props.bet.id}/winner`, {
      method: 'PUT',
      credentials: 'include',
      headers: {
        'Content-type': 'application/json',
        [csrfHeader]: csrfToken
      },
      body: JSON.stringify(body)
    }).then(data => {
      this.props.reloadFunction();
    });
  }
}

function Winner(props) {

  let bet = props.bet;
  if (!!bet.winner) {
    return (
      <Col className="align-items-center">
        {bet.winner.name} won! <Paid bet={bet} me={props.me} paidFunction={props.paidFunction} />
      </Col>
    );
  }

  if (props.me === undefined || (bet.creator.id !== props.me.id && bet.against.id !== props.me.id)) {
    return (
      <Col className="align-items-center">No winner declared.</Col>
    );
  }

  return (
    <Col className="align-items-center">
    <ButtonGroup aria-label="Select winner">
      <Button variant="outline-primary" onClick={() => props.winnerFunction(bet.creator.id)}>
        {bet.creator.name}
      </Button>
      <Button variant="outline-primary" onClick={() => props.winnerFunction(bet.against.id)}>
        {bet.against.name}
      </Button>
    </ButtonGroup>
    </Col>
  );
}

function Paid(props) {
  let bet = props.bet;

  if (bet.paid) {
    return <Button variant="success" disabled={true}>Paid</Button>;
  }

  if (props.me === undefined || (bet.creator.id !== props.me.id && bet.against.id !== props.me.id)) {
    return <Button variant="warning" disabled={true}>Unpaid</Button>;
  }

  return <Button variant="warning" onClick={props.paidFunction}>Mark as paid</Button>;
}

export default Bet;