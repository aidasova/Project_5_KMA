import React from 'react';
import { Route } from 'react-router-dom';
import MainPage from './pages/MainPage/MainPage';
import ButtonPage from './pages/ButtonPage/ButtonPage';
//import PurposePage from './pages/PurposePage/PurposePage';

import './index.css';

class App extends React.Component {
  render() {
    return (
      <div className="app">
         <Route path="/" exact component={MainPage} />
         <Route path="/1" exact component={ButtonPage} />
         {/* <Route path="/2" exact component={PurposePage} /> */}
      </div>
    );
  }
}

export default App;
