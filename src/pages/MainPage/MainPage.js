import React, { Component } from 'react';
import './MainPage.css';
import Button from '../../components/Button/Button';
// import Purpose from '../../components/Purpose/Purpose';
// import Limit from '../../components/Limit/Limit'

class MainPage extends Component {
    render() { 
        return (
            <div className="main-page">
                <Button />
                {/* <Limit />
                <Purpose /> */}
            </div>
        );
    }
}
 
export default MainPage;