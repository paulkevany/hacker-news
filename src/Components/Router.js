import React, { Component } from "react";
import Home from './Home'
import NewestStories from './NewestStories'

import { withRouter, Route, Switch } from "react-router-dom";

class Router extends Component {
    render() {
        return (
            <Switch>
                <Route exact path="/newest-stories" component={NewestStories}/>
                <Route path="/" component={Home} />
            </Switch>
        );
    }
}
export default withRouter(Router);
