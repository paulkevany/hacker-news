import React, { Component } from "react";
import { Grid, Typography} from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import AppBarTop from "./AppBarTop";
import PropTypes from "prop-types";
import StorySummary from './StorySummary'
import { connect } from "react-redux";
import { getNewestStories } from "../Actions/story";

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
        maxWidth: "100%"
    }
};

class NewestStories extends Component {
    componentDidMount() {
        this.props.dispatch(getNewestStories());
    }

    render() {
        const { classes, stories } = this.props;

        const newestStories =
            stories.length === 0 ? (
                <Typography>No Stories were found </Typography>
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
                            points={story.score}
                        />
                    </Grid>
                ))
            );
        return (
            <div className={classes.root}>
                    <AppBarTop />
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
                            {newestStories}
                        </Grid>
                    </Grid>
            </div>
        );
    }
}

const mapStateToProps = ({app: {stories}}) => ({stories});

NewestStories.propTypes = {
    classes: PropTypes.object.isRequired
};

export default connect(mapStateToProps)(withStyles(styles)(NewestStories));
