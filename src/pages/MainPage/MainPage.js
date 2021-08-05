import React, { Component } from 'react';
import './MainPage.css';
import Main from '../../components/Main/Main';
import Cards from '../../components/Cards/Cards';

class MainPage extends Component {
    render() { 
        return (
            <div className="main-page">
                <Main />
                <Cards />
            </div>
        );
    }
}
 
export default MainPage;