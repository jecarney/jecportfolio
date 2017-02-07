import React, { Component } from 'react';
import './App.css';

import Panel from './Panel'
import Samples from './Samples'

class App extends Component {
  constructor() {
    super();
    this.state = {
      visiblePanels: ["d"],
      selectedPanel: "d",
      selectedImg: 0
    };
  };
  render() {
    return (
      <div className="App">
        <div className="wrapper">
          <header> Jules Carney </header>
          <Panel label="a" titleText="Contact" reveal={this.reveal} reset={this.reset} hidePanel={this.hidePanel} hideContent={this.hideContent} brightPanel={this.brightPanel}>
            <div className="contactText"><a href="https://ca.linkedin.com/in/jecarney"><img src="in.png" alt="Linkedin Icon" width="20px" height="20px"/>
            <p>jecarney</p></a></div>
            <div className="contactText"><img src="mail.png" alt="Profile" width="20px" height="15px"/><p id="contactTextFix">
            julia.e.carney<span>@</span>gmail.com</p>
            </div>
          </Panel>
          <Panel label="b" titleText="About Me" reveal={this.reveal} reset={this.reset} hidePanel={this.hidePanel} hideContent={this.hideContent} brightPanel={this.brightPanel}>
            <img src="profile.png" alt="Profile"/>
            <div className="contentText">Hello! I'm Jules, a full-stack developer based in Toronto. I have years of JavaScript and web mapping experience, and many back-end skills. I'd love to work with you!</div>
          </Panel>
          <Panel label="c" titleText="Highlights" reveal={this.reveal} reset={this.reset} hidePanel={this.hidePanel} hideContent={this.hideContent} brightPanel={this.brightPanel}>
            <div className="contentText">
              <ul>
                <li>Several years of professional experience with client-side scripting using JavaScript and libraries</li>
                <li>Back-end and database using SQL, .NET</li>
                <li>Familiar with React, Node.js, Express, Mongoose and MongoDB</li>
                <li>Web mapping using Google Maps and ArcGIS Online</li>
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
          <Panel label="d" titleText="Sample Work" reveal={this.reveal} reset={this.reset} hidePanel={this.hidePanel} hideContent={this.hideContent} brightPanel={this.brightPanel}>
            <div className="contentText">
              <Samples selectedImg={this.state.selectedImg} imgClick={this.imgClick} close={this.close} imgClass={this.imgClass} closeClass={this.closeClass}/>
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

  /* Sample Gallery*/

  imgClass = (num) => {
    var imgClass = "";
    if(this.state.selectedImg===num){
      imgClass += " selectedSample";
    }
    if(this.state.selectedImg!==0){
      imgClass += " upperLeft";
    }else{
      imgClass = "img-"+num;
    }
    return imgClass;
  }

  imgClick = (num) => {
    this.setState({selectedImg: num});
  }

  close = () => {
    this.setState({selectedImg: 0});
  }

  closeClass = () => {
    if(this.state.selectedImg===0||this.state.selectedPanel!=="d"){
      return " hidden";
    }else{
      return "";
    }
  }
}

export default App;
