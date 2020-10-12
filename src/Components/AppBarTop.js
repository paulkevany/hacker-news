import React, { Component } from "react";
import {
    AppBar,
    Grid,
    Typography,
    Toolbar,
    Menu,
    MenuItem,
    Button
} from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";

const styles = {
    appbar: {
        background: "#ff6600"
    }
};

class AppBarTop extends Component {
    state = {
        anchorEl: "",
    };

    handleClick = event => {
        this.setState({anchorEl: event.target})
    }

    handleClose = event => {
        this.setState({ anchorEl: null });
    };

    render() {
        const { classes } = this.props;
        return (
            <AppBar position="fixed" className={classes.appbar}>
                <Toolbar>
                    <Grid
                        item
                        container
                        direction="row"
                        alignItems="center"
                        alignContent="space-between"
                        spacing={2}
                    >
                        <Grid item>
                            <img
                                src="https://news.ycombinator.com/y18.gif"
                                height="40"
                                width="40"
                                alt="Hacker News Logo"
                            />
                        </Grid>
                        <Grid item>
                            <Typography style={{ fontSize: 20 }}>
                                Hacker News
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Button onClick={this.handleClick}>
                                Choose Category
                            </Button>
                            <Menu
                                id="category-menu"
                                anchorEl={this.state.anchorEl}
                                open={Boolean(this.state.anchorEl)}
                                onClose={this.handleClose}
                            >
                                <MenuItem component={Button} href="/" onClick={this.handleClose}>
                                        Top Stories
                                </MenuItem>
                                <MenuItem component={Button} href="/newest-stories" onClick={this.handleClose}>
                                        Newest Stories
                                </MenuItem>
                            </Menu>
                        </Grid>
                    </Grid>
                </Toolbar>
            </AppBar>
        );
    }
}

AppBarTop.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(AppBarTop);
