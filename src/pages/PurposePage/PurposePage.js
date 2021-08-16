import React, { Component } from 'react';
import './PurposePage.css';

class PurposePage extends Component {

    render() { 
		console.log(this.props)
        console.log(this.props.startingAmount)
        return (

            <div className="purpose-page">
	          5858
              {this.props.startingAmount}
              
            </div>
        );
    }
}
 
export default PurposePage;