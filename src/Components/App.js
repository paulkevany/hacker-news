import React, { Component } from "react";
import { Provider } from "react-redux";
import { ConnectedRouter } from "connected-react-router";
import Router from "./Router";

class App extends Component {
    render() {
        const { history, store } = this.props; //Retrieve history and store from props
        return (
            <Provider store={store}>
                <ConnectedRouter history={history}>
                    <Router />
                </ConnectedRouter>
            </Provider>
        );
    }
}
export default App

