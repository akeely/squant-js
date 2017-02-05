import React, {
    Component
} from 'react';

import {Card, CardActions, CardHeader, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import FontIcon from 'material-ui/FontIcon';
import Avatar from 'material-ui/Avatar';

import {
    green600,
    red600,
    white
} from 'material-ui/styles/colors';

class Bet extends Component {

    render() {
        const {
            bet
        } = this.props;

        const initial = bet.proposedBy.name.charAt(0).toUpperCase();

        return (
            <Card
                style={{
                    maxWidth: '450px',
                    margin: '8px'
                }}
            >
                <CardHeader
                    title={bet.proposedBy.name}
                    avatar={<Avatar>{initial}</Avatar>}
                />
                <CardTitle title={bet.name} />
                <CardText>
                    {bet.proposition}
                </CardText>
                <CardActions>
                    <FlatButton
                        backgroundColor={green600}
                        labelStyle={{color: white}}
                        icon={<FontIcon className="material-icons" color={white}>done</FontIcon>}
                        label="Accept"
                    />
                    <FlatButton
                        backgroundColor={red600}
                        labelStyle={{color: white}}
                        icon={<FontIcon className="material-icons" color={white}>clear</FontIcon>}
                        label="Decline"
                    />
                </CardActions>
            </Card>
            );
    }
}

export default Bet;

