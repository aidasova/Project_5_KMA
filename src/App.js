import React from 'react';
import { Route } from 'react-router-dom';
import MainPage from './pages/MainPage/MainPage';
import './index.css';

class App extends React.Component {
  render() {
    return (
      <div className="app">
        <MainPage />
      </div>
    );
  }
}

export default App;
