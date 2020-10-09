import React, { Component } from "react";
import Home from './Home'

import { withRouter, Route, Switch } from "react-router";

class Router extends Component {
    render() {
        return (
            <Switch>
                <Route path="/" component={Home} />
            </Switch>
        );
    }
}
export default withRouter(Router);
