import React, { Component } from 'react';
import { connect } from 'react-redux';
import StuffList from './components/StuffList';
import './App.css';
import configureStore from "./store/configureStore";

class App extends Component {
    render() {
        return (
            <div className="app">
                <StuffList store={configureStore()}/>
            </div>
        );
    }
}

export default connect()(App);
