import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Router, Switch, Route } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory'

import BooksList from './containers/BooksList';
import BookInfo from './containers/BookInfo'
import './App.css';

const customHistory = createBrowserHistory()

class App extends Component {
    render() {

        return (
            <Router history={customHistory}>
                <div>
                    <Switch>
                        <Route exact path="/" component={ BooksList } />
                        <Route path="/bookinfo/:id" component={ BookInfo } />
                        <Route path="*" component={ () => <div>Not found 404</div> } />
                    </Switch>
                </div>
            </Router>
        );
    }
}

export default connect()(App);
