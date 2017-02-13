import React, { Component } from 'react';

class Samples extends Component {

  render() {
          var props = this.props;
          function LightBox1(props) {
              return (
                <div className="lightBox">
                  <img src="ecospark.png" alt="EcoSpark Map"/>
                  <a href="http://www.ecospark.ca/changing-currents-summary-map" target="_blank"><h4>Ecospark Changing Currents Maps</h4></a>
                  <p>Built using: jQuery, Google Maps JS API</p>
                  <p>Upgraded online maps to illustrate relationships between land use, greenspace, and stream health using Google APIs: Maps, Drive, and Fusion Tables</p>
                  <button className="close lightBoxClose" onClick={props.closeLightBox}>X</button>
                </div>
                )
              }

              function LightBox2(props) {
                  return (
                    <div className="lightBox">
                      <img src="mgoldman.png" alt="Marlene Goldman site"/>
                      <a href="http://marlenegoldman.ca/" target="_blank"><h4>Marlene Goldman profile site</h4></a>
                      <p>Built using: WordPress.org, CSS</p>
                      <p>I designed this site by customizing a WordPress theme using CSS to showcase Goldmans work as a public academic and to publicize her upcoming film release.</p>
                      <button className="close lightBoxClose" onClick={props.closeLightBox}>X</button>
                    </div>
                    )
                  }

              function LightBox3(props) {
                  return (
                    <div className="lightBox">
                      <img src="lcbo_api.png" alt="LCBO API app"/>
                      <a href="http://julescarney.com/api-sample/" target="_blank"><h4>LCBO API project</h4></a>
                      <p>Built using: HTML5, CSS3, jQuery. Responsive.</p>
                      <p>This application was a project for the HackerYou Full-Stack Development course. It connects to the LCBO API using AJAX and displays data on beers and store locations.</p>
                      <button className="close lightBoxClose" onClick={props.closeLightBox}>X</button>
                    </div>
                    )
                  }

              function LightBox4(props) {
                  return (
                    <div className="lightBox">
                      <img src="poptask.png" alt="Pop-Task App"/>
                      <a href="https://pop-task-tut.herokuapp.com/" target="_blank"><h4>"Pop Task" project</h4></a>
                      <p>Built using: React, Express, and Mongoose</p>
                      <p>I built this application as a final project for the HackerYou Full-Stack Development course. Pop Task can be used to manage daily tasks and track time with a minimum of distraction.</p>
                      <button className="close lightBoxClose" onClick={props.closeLightBox}>X</button>
                    </div>
                    )
                  }
          var lightBox;

          switch(this.props.selectedImg) {
            case 1:
                lightBox = <LightBox1 closeLightBox={this.props.closeLightBox}/>;
                break;
            case 2:
                lightBox = <LightBox2 closeLightBox={this.props.closeLightBox}/>;
                break;
            case 3:
                lightBox = <LightBox3 closeLightBox={this.props.closeLightBox}/>;
                break;
            case 4:
                lightBox = <LightBox4 closeLightBox={this.props.closeLightBox}/>;
                break;
        }
          return (
            <div className="sampleWrap">
              <img className={this.props.imgClass(1)} src="ecospark.png" alt="EcoSpark Map" onClick={() => this.props.imgClick(1)}/>
              <img className={this.props.imgClass(2)} src="mgoldman.png" alt="Marlene Goldman site" onClick={() => this.props.imgClick(2)}/>
              <img className={this.props.imgClass(3)} src="lcbo_api.png" alt="LCBO API app" onClick={() => this.props.imgClick(3)}/>
              <img className={this.props.imgClass(4)} src="poptask.png" alt="Pop-Task App" onClick={() => this.props.imgClick(4)}/>
                {lightBox}
          </div>
          )
  }
}
export default Samples;
