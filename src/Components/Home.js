import React, { Component } from "react";
import { AppBar, Paper, Grid, Toolbar, Typography } from "@material-ui/core";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import StorySummary from "./StorySummary";
import { getTopStories } from "../Actions/story";
import {connect} from 'react-redux'

const styles = {
    root: {
        display: "flex",
        flexDirection: "column",
        minWidth: "100%",
        minHeight: "100vh",
        alignItems: "center",
        justifyContent: "center"
    },
    paper: {
        minWidth: "100%",
        backgroundColor: "#F7F7F7"
    },

    appbar: {
        background: "#ff6600"
    }
};

class Home extends Component {
    componentDidMount() {
        this.props.dispatch(getTopStories());
    }
    render() {
        const { classes } = this.props;

        return (
            <div className={classes.root}>
                <Paper className={classes.paper}>
                    <Grid item>
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
                                </Grid>
                            </Toolbar>
                        </AppBar>
                        <Grid
                            item
                            container
                            align="center"
                            direction="row"
                            justify="center"
                            style={{
                                width: "70vw",
                                height: "100vh",
                                background: "#e2e6e9",
                                marginLeft: "15vw",
                                marginRight: "15vw"
                            }}
                        >
                            <Grid item style={{ marginTop: "10vh" }}>
                                <StorySummary />
                            </Grid>
                        </Grid>
                    </Grid>
                </Paper>
            </div>
        );
    }
}

const mapStateToProps = ({}) => ({
        
})

Home.propTypes = {
    classes: PropTypes.object.isRequired,
    dispatch: PropTypes.func.isRequired
};

export default connect(mapStateToProps)(withStyles(styles)(Home));
