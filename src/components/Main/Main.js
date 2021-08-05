import React, { Component } from 'react';
import './Main.css';

class Main extends Component {
    constructor() {
        super();
        this.state = {
            items: [], block: ''
        };
    }
    
    
    render() { 
        return (
            <div className="main">
                 <button className="main__title" onSubmit={this.onSubmit}>
                    Добавить цель
                </button>
         
            </div>
        );
    }
}
 
export default Main;