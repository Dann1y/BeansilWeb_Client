import React, { Component } from 'react';
import Header from "components/Header/Header"
import Welcome from "components/Welcome/Welcome"

class MainContainer extends Component {
    render() {
        return (
            <div className="MainContainer">
                <Header />
                <Welcome />
            </div>
        );
    }
}

export default MainContainer;