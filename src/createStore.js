import { createStore, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import { apiMiddleware } from "redux-api-middleware";
import { routerMiddleware } from "connected-react-router";
import { composeWithDevTools } from "redux-devtools-extension";
import { createLogger } from "redux-logger";

import reducers from "./Reducers/reducers";
const enhance = composeWithDevTools({});

//Log any failure actions to console
const logger = createLogger({
    predicate: (getState, action) => action.type.endsWith("FAILURE")
});

export default history =>
    createStore(
        reducers(history),
        enhance(
            applyMiddleware(
                apiMiddleware,
                thunkMiddleware,
                routerMiddleware(history),
                logger
            )
        )
    );
