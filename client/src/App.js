import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import TopNav from './component/topnav';
import Sidebar from './component/sidebar';
import TopAlert from './component/topalert';
import Content from './component/content';

class App extends Component {
  render() {
    return (
      <div>
        <TopNav />
        <br />

        <div className="container">
          <TopAlert />
        </div>

        <div className="container">
          <div className="row">
            <div className="col-md-3"><Sidebar /></div>
            <div className="col-md-9"><Content /></div>
          </div>          
        </div>


      </div>
    );
  }
}

export default App;
