import React, { Component } from 'react';
import './EditPage.css';
import Edit from '../../components/Edit/Edit';

class EditPage extends Component {
    render() { 
        console.log('+++',this.props.match.params.id);
        return (
            <div className="main-page">
              <Edit id={this.props.match.params.id} />
            </div>
        );
    }
}
 
export default EditPage;