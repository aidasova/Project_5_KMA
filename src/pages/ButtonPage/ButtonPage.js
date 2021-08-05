import React, { Component } from 'react';
import './ButtonPage.css';
import Limit from '../../components/Limit/Limit';

class ButtonPage extends Component {
    render() { 
        return (
            <div className="main-page">
              <Limit />
            </div>
        );
    }
}
 
export default ButtonPage;