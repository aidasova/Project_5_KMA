import React, { Component } from 'react';
import './MainPage.css';
import Main from '../../components/Main/Main';
import Cardlist from '../../components/Cardlist/Cardlist';

class MainPage extends Component {
    render() { 
        
        return (
            <div className="main-page">
                <Main />
                <Cardlist />
            </div>
        );
    }
}
 
export default MainPage;