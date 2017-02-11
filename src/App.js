import React, { Component } from 'react';
import './App.css';

import Panel from './Panel'
import Samples from './Samples'
import {Gmaps} from 'react-gmaps';
import MapStyle from './data/mapStyle';

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
      <div className="mapDiv">
        <Gmaps
          width={'100%'}
          height={'100%'}
          lat={43.639754}
          lng={-79.388189}
          zoom={17}
          params={{v: '3.exp', key: 'AIzaSyBN9YToc3QPYdZNqajKXEdEKN7BAFTgpCY'}}
          onMapCreated={this.onMapCreated}
          >
        </Gmaps>
      </div>
        <div className="wrapper">
          <header> Jules Carney </header>
          <Panel label="a" titleText="Contact" reveal={this.reveal} hidePanel={this.hidePanel} hideContent={this.hideContent} brightPanel={this.brightPanel}>
            <div className="contactText" id="linkedin"><a href="https://ca.linkedin.com/in/jecarney" target="_blank"><img src="in.png" alt="Linkedin Icon" width="20px" height="20px"/>
            <p>jecarney</p></a></div>
            <div className="contactText" id="email"><img src="mail.png" alt="Profile" width="16px" height="12px"/><p id="contactTextFix">
            julia.e.carney<span>@</span>gmail.com</p>
            </div>
            <button className={"close" + this.closePanelClass("a")} onClick={(evt) => this.closePanel(evt)}>X</button>
          </Panel>
          <Panel label="b" titleText="About Me" reveal={this.reveal} hidePanel={this.hidePanel} hideContent={this.hideContent} brightPanel={this.brightPanel}>
            <img src="profile.png" alt="Profile"/>
            <div className="contentText">Hello! I'm Jules, a full-stack developer based in Toronto. I have years of JavaScript and web mapping experience, and many back-end skills. I'd love to work with you!</div>
            <button className={"close" + this.closePanelClass("b")} onClick={(evt) => this.closePanel(evt)}>X</button>
          </Panel>
          <Panel label="c" titleText="Highlights" reveal={this.reveal} hidePanel={this.hidePanel} hideContent={this.hideContent} brightPanel={this.brightPanel}>
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
            <button className={"close" + this.closePanelClass("c")} onClick={(evt) => this.closePanel(evt)}>X</button>
          </Panel>
          <Panel label="d" titleText="" reveal={this.reveal} hidePanel={this.hidePanel} hideContent={this.hideContent} brightPanel={this.brightPanel}>
            <div className="contentText contentTextd">
              <Samples selectedImg={this.state.selectedImg} imgClick={this.imgClick} close={this.close} imgClass={this.imgClass} closeClass={this.closeClass}/>
            </div>
          </Panel>
        </div>
      </div>
    );
  }

  onMapCreated = (map) => {
    var mapOptions = {
      disableDefaultUI: true,
      styles: MapStyle.styles,
      draggable: false,
      scrollwheel: false,
      disableDoubleClickZoom: true
    };
    map.setOptions(mapOptions);
    map.resize;
  }

  reveal = (label) => {
    var visiblePanels = ["a","b","c","d"];
    visiblePanels = visiblePanels.slice(visiblePanels.indexOf(label));
    this.setState({
      visiblePanels:visiblePanels,
      selectedPanel: label
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

  closePanel = (evt) => {
    evt.stopPropagation()
    this.setState({
      visiblePanels: ["d"],
      selectedPanel: "d"
    });
  }

  closePanelClass = (panel) => {
    if(this.state.selectedPanel===panel){
      return "";
    }else{
      return " hidden";
    }
  }

}

export default App;
