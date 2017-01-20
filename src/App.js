import React, { Component } from 'react';
import './App.css';

import Panel from './Panel'

class App extends Component {
  constructor() {
    super();
    this.state = {
      visiblePanels: ["d"],
      selectedPanel: "d"
    };
  };
  render() {
    return (
      <div className="App">
        <div className="wrapper">
          <header> Jules Carney </header>
          <Panel label="a" titleText="Contact" reveal={this.reveal} reset={this.reset} hidePanel={this.hidePanel} hideContent={this.hideContent} brightPanel={this.brightPanel}>
            <div className="contactText"><a href="https://ca.linkedin.com/in/jecarney"><img src="in.png" alt="Linkedin Icon" width="20px" height="20px"/>
            Jules Carney</a></div>
            <div className="contactText"><img src="mail.png" alt="Profile" width="20px" height="15px"/>
            julia.e.carney<span>@</span>gmail.com
            </div>
          </Panel>
          <Panel label="b" titleText="About Me" reveal={this.reveal} reset={this.reset} hidePanel={this.hidePanel} hideContent={this.hideContent} brightPanel={this.brightPanel}>
            <img src="profile.jpg" alt="Profile" width="300px" height="200px"/>
            <div className="contentText">Hello! I'm Jules, a full-stack developer based out of Toronto. I have four years of JavaScript and web mapping experience, and many back-end skills. I'd love to work with you!</div>
          </Panel>
          <Panel label="c" titleText="Skills" reveal={this.reveal} reset={this.reset} hidePanel={this.hidePanel} hideContent={this.hideContent} brightPanel={this.brightPanel}>
            <div className="contentText">
              Major strengths include:
              <ul>
                <li>Javascript and libraries</li>
                <li>web mapping using Google Maps and ArcGIS Online</li>
                <li>back-end and database using SQL, .NET, Node.js, NoSQL databases</li>
              </ul>
              <div className="iconGallery">
                <img src="JS.png" alt="JS icon" width="40px" height="40px"/>
                <img src="jQuery.png" alt="jQuery icon" width="40px" height="40px"/>
                <img src="react.png" alt="React icon" width="40px" height="40px"/>
                <img src="html5.png" alt="HTML5 icon" width="40px" height="40px"/>
                <img src="css3.png" alt="CSS3 icon" width="40px" height="40px"/>
                <img src="dotnet.png" alt=".NET icon" width="40px" height="40px"/>
              </div>
            </div>
          </Panel>
          <Panel label="d" titleText="Portfolio" reveal={this.reveal} reset={this.reset} hidePanel={this.hidePanel} hideContent={this.hideContent} brightPanel={this.brightPanel}>
            <div className="contentText">
              <div className="imageWrap">
                <img src="ecospark.png" alt="EcoSpark Map" width="200px" height="200px"/>
                <img src="poptask.png" alt="Pop-Task App" width="200px" height="200px"/>
                <img src="lcbo_api.png" alt="LCBO API app" width="200px" height="200px"/>
                <img src="mgoldman.png" alt="Marlene Goldman site" width="200px" height="200px"/>
              </div>
            </div>
          </Panel>
        </div>
      </div>
    );
  }

  reveal = (label) => {
    var visiblePanels = ["a","b","c","d"];
    visiblePanels = visiblePanels.slice(visiblePanels.indexOf(label));
    this.setState({
      visiblePanels:visiblePanels,
      selectedPanel: label
    });
  }

  reset = () => {
    this.setState({
      visiblePanels:["a","b","c","d"],
      selectedPanel: "a"
    });
  }

  hidePanel = (label) => {
    return (this.state.visiblePanels.includes(label) ? '':' hidepanel' + label);
  }

  hideContent = (label) => {
    return (this.state.visiblePanels.includes(label) ? '':' hideContent');
  }

  brightPanel = (label) => {
    return (this.state.selectedPanel===label ? ' brightPanel':'');
  }
}

export default App;
