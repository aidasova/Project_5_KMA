import React, { Component } from 'react';
import './FormPage.css';
import Form from '../../components/Form/Form';

class FormPage extends Component {
    render() { 
        return (
            <div className="main-page">
              <Form />
            </div>
        );
    }
}
 
export default FormPage;