import React, { Component } from 'react';
import './EditPage.css';
import Edit from '../../components/Edit/Edit';

class EditPage extends Component {
    render() { 
        return (
            <div className="main-page">
              <Edit />
            </div>
        );
    }
}
 
export default EditPage;