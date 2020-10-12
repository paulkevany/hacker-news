import React, { Component } from "react";
import PropTypes from "prop-types";
import {
    Card,
    CardMedia,
    CardContent,
    Typography,
    Grid
} from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";
const str = require("string-to-color");
const dateFns = require("date-fns");

const styles = {
    cardMedia: {
        height: "10vh"
    },
    cardDesktop: {
        display: "flex",
        width: "50vw",
        height: "20vh",
        minHeight: "10vh",
        marginBottom: "7.5vh",
        borderRadius: "10px",
        boxShadow: "7px 7px 7px #b3b3b3",
        "&:hover": {
            background: "#E6E3E3"
        }
    },
    cardMobile: {
        display: "flex",
        width: "90vw",
        height: "35vh",
        marginBottom: "2vh"
    },

    pointsDesktop: {
        marginBottom: "4vh"
    },

    pointsMobile: {
        marginBottom: "3vh"
    },

    link: {
        textDecoration: "none"
    },

    desktopTitle: { marginBottom: "1vh", fontStyle: "bold" },

    mobileTitle: {}
};

class StorySummary extends Component {
    state = {
        isMobile: ""
    };

    componentDidMount() {
        window.addEventListener(
            "load",
            () => {
                this.setState({ isMobile: window.innerWidth < 1000 });
            },
            false
        );

        window.addEventListener(
            "resize",
            () => {
                this.setState({ isMobile: window.innerWidth < 1000 });
            },
            false
        );
    }

    componentWillUnmount(){
        window.removeEventListener('resize', () => {
            this.setState({isMobile: null})
    })

        window.removeEventListener('load', () => {
            this.setState({isMobile: null})
    })
    }

    createDateFromTime = timestamp => {
        const milli = timestamp * 1000;
        const date = new Date(milli);
        return date;
    };

    render() {
        const { title, points, time, by, url, domain, classes } = this.props;

        const isTitle = title ? (
            <Typography
                className={
                    this.state.isMobile
                        ? classes.mobileTitle
                        : classes.desktopTitle
                }
                variant="h5"
            >
                {title}
            </Typography>
        ) : (
            <Typography>No title found</Typography>
        );

        const storyColour = str(title);

        const storyColourStyle = {
            backgroundColor: storyColour,
            height: "100%",
            minWidth: "10%"
        };

        const storyPoints = (
            <Grid
                item
                container
                alignItems="center"
                direction="row"
                spacing={1}
            >
                <Grid item>
                    <ThumbUpIcon />
                </Grid>
                <Grid item>{points}</Grid>
            </Grid>
        );

        const postedTime = `${dateFns.formatDistance(
            Date.now(),
            this.createDateFromTime(time)
        )} ago`;

        return (
            <div>
                <Link to={url} className={classes.link}>
                    <Card
                        className={
                            this.state.isMobile
                                ? classes.cardMobile
                                : classes.cardDesktop
                        }
                    >
                        <Grid
                            container
                            direction="row"
                            justify="space-between"
                            style={{ width: "100%", height: "100%" }}
                        >
                            <Grid
                                item
                                align="left"
                                style={{ height: "100%", width: "20%" }}
                            >
                                <CardMedia
                                    className={classes.cardMedia}
                                    title={isTitle}
                                    src="url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8/1+yHgAHtAKYD9BncgAAAABJRU5ErkJggg==)"
                                    style={storyColourStyle}
                                />
                            </Grid>
                            <Grid
                                item
                                align="right"
                                style={{ height: "100vh", width: "65%" }}
                            >
                                <CardContent>
                                    <Grid item container direction="column">
                                        <Grid item align="left">
                                            {isTitle}
                                        </Grid>
                                        <Grid item align="left">
                                            <Typography variant="subtitle1">
                                                Posted by {by} {postedTime}{" "}
                                            </Typography>
                                        </Grid>
                                        <Grid
                                            item
                                            align="left"
                                            className={
                                                this.state.isMobile
                                                    ? classes.pointsMobile
                                                    : classes.pointsDesktop
                                            }
                                        >
                                            {storyPoints}
                                        </Grid>
                                    </Grid>
                                </CardContent>
                            </Grid>
                        </Grid>
                    </Card>
                </Link>
            </div>
        );
    }
}

StorySummary.propTypes = {
    classes: PropTypes.object.isRequired
};

const mapStateToProps = (initialState, ownProps) => {
    const { title, id, url, domain, by, time } = ownProps;
    return ownProps;
};
export default connect(mapStateToProps)(withStyles(styles)(StorySummary));
