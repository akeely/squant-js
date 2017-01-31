import React, {
    Component
} from 'react';

import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';

class Menu extends Component {

    constructor(props) {
        super(props);
        this.state = {open: false};
    }

    handleToggle = () => this.setState({open: !this.state.open});

    handleClose = () => this.setState({open: false});

    render() {

        return (
            <AppBar
                title="squant.io"
                onLeftIconButtonTouchTap={this.handleToggle}
            >
                <Drawer
                    docked={false}
                    open={this.state.open}
                    onRequestChange={(open) => this.setState({open})}
                >
                    <MenuItem onTouchTap={this.handleClose} primaryText="Refresh" />
                    <MenuItem onTouchTap={this.handleClose} primaryText="Help" />
                    <MenuItem onTouchTap={this.handleClose} primaryText="Sign out" />
                </Drawer>
            </AppBar>
        );
    }
}

export default Menu;
