import React, { Component } from "react";
import {
    Button,
    Grid,
    Toolbar,
    Typography,
    Menu,
    MenuItem
} from "@material-ui/core";
import AppBarTop from './AppBarTop'
import PropTypes from "prop-types";
import { Redirect } from "react-router";
import {Link} from 'react-router-dom'
import { withStyles } from "@material-ui/core/styles";
import StorySummary from "./StorySummary";
import { getTopStories } from "../Actions/story";
import { connect } from "react-redux";

const styles = {
    root: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
    },

};

class Home extends Component {

    componentDidMount() {
        this.props.dispatch(getTopStories());
    }


    render() {
        const { classes } = this.props;
        const { stories } = this.props;

        const story =
            stories.length === 0 ? (
                <Grid item>
                    <Typography variant="subtitle1">
                        No Stories were found
                    </Typography>
                </Grid>
            ) : (
                stories.map(story => (
                    <Grid item key={story.id}>
                        <StorySummary
                            id={story.id}
                            title={story.title}
                            url={story.url}
                            domain={story.domain}
                            by={story.by}
                            time={story.time}
                            points ={story.score}
                        />
                    </Grid>
                ))
            );
        return (
            <div className={classes.root}>
                    <AppBarTop/>
                        <Grid
                            item
                            container
                            align="center"
                            direction="row"
                            justify="center"
                            style={{
                                width: "40vw",
                                height: "100vh",
                                marginLeft: "20vw",
                                marginRight: "20vw",
                                marginTop: "20vh"
                            }}
                        >
                            <Grid item align="right"></Grid>
                            <Grid item align="center">
                                {story}
                            </Grid>
                        </Grid>
            </div>
        );
    }
}

const mapStateToProps = ({ app: { stories } }) => ({ stories });

Home.propTypes = {
    classes: PropTypes.object.isRequired,
    dispatch: PropTypes.func.isRequired,
    stories: PropTypes.array.isRequired
};

export default connect(mapStateToProps)(withStyles(styles)(Home));
