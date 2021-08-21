import React from 'react';
import { Route } from 'react-router-dom';
import MainPage from './pages/MainPage/MainPage';
import FormPage from './pages/FormPage/FormPage';
import PurposePage from './pages/PurposePage/PurposePage';
import EditPage from './pages/EditPage/EditPage';

import './index.css';

class App extends React.Component {
  render() {
    return (
      <div className="app">
         <Route path="/" exact component={MainPage} />
         <Route path="/form/:id" exact component={FormPage} />
         <Route path="/purpose/:id" exact component={PurposePage} />
         <Route path="/purpose/edit/:id" exact component={EditPage} />
      </div>
    );
  }
}

export default App;
