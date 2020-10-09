const axios = require("axios");

export const LOAD_STORIES_REQUEST = "LOAD_STORIES_REQUEST";
export const LOAD_STORIES_SUCCESS = "LOAD_STORIES_SUCCESS";
export const LOAD_STORIES_FAILURE = "LOAD_STORIES_FAILURE";
export const LOAD_SINGLE_STORY_REQUEST = "LOAD_SINGLE_STORY_REQUEST";
export const LOAD_SINGLE_STORY_SUCCESS = "LOAD_SINGLE_STORY_SUCCESS";
export const LOAD_SINGLE_STORY_FAILURE = "LOAD_SINGLE_STORY_FAILURE";

const URL = "https://hacker-news.firebaseio.com/v0/";

export function getTopStories() {
    return function (dispatch) {
        dispatch({ type: LOAD_STORIES_REQUEST });
        return axios
            .get(URL + "topstories.json")
            .then(res => {
                dispatch({ type: LOAD_STORIES_SUCCESS, payload: res });
                res.data.map(id => {
        axios
            .get(URL + `item/${id}.json`)
            .then(story => {
                dispatch({ type: LOAD_SINGLE_STORY_SUCCESS, payload: story });
            })
            .catch(err =>
                dispatch({ type: LOAD_SINGLE_STORY_FAILURE, error: err })
            );

                });
            })
            .catch(err => {
                dispatch({ type: LOAD_STORIES_FAILURE, error: err });
            });
    };
}
