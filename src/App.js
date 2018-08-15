import React, { Component } from 'react';
import { connect } from 'react-redux';
import BooksList from './containers/BooksList';
import './App.css';

class App extends Component {
    render() {

        return (
            <div className="app">
                <BooksList />
            </div>
        );
    }
}

export default connect()(App);
