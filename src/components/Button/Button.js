import React, { Component } from 'react';
import './Button.css';

class Button extends Component {
    render() { 
        return (
            <header className="button">
                <button className="button__title">
                    Добавить цель
                </button>
            </header>
        );
    }
}
 
export default Button;