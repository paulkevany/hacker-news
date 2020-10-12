import {
    LOAD_STORIES_REQUEST,
    LOAD_STORIES_SUCCESS,
    LOAD_STORIES_FAILURE,
    LOAD_SINGLE_STORY_REQUEST,
    LOAD_SINGLE_STORY_SUCCESS,
    LOAD_SINGLE_STORY_FAILURE,
} from "../Actions/story.js";

const initialState = {
    retrievingStories: false,
    storiesRetrieved: false,
    stories: []
};

export default (state = initialState, action) => {
    switch (action.type) {
        case LOAD_STORIES_REQUEST:
            return {
                ...state,
                retrievingStories: true,
                storiesRetrieved: false,
                storyRetrieveError: false
            };
        case LOAD_STORIES_SUCCESS:
            const storyIds = [];
            action.payload.data.map((id) => {
                return storyIds.push(id)
            })
            return {
                ...state,
                retrievingStories: false,
                storiesRetrieved: true,
                storyIds
            };

        case LOAD_STORIES_FAILURE:
            return {
                ...state,
                retrievingStories: false,
                storiesRetrieved: false,
                retrieveStoriesError: action.error
            };
        case LOAD_SINGLE_STORY_REQUEST:
            return {
                ...state,
                loadingStory: true,
                storyLoaded: false,
                storyLoadError: null
            }
        
        case LOAD_SINGLE_STORY_SUCCESS:
            return {
                ...state,
                loadingStory: false,
                storyLoaded: true,
                storyLoadError: false,
                stories: [...state.stories, action.payload.data]
            }

        case LOAD_SINGLE_STORY_FAILURE: 
            return {
                ...state,
                loadingStory: false,
                storyLoaded: false,
                storyLoadError: action.error

            }

        default:
            return {
                ...state
            };
    }
};
