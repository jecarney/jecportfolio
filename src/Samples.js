import React, { Component } from 'react';

class Samples extends Component {

  render() {

          function SampleText1() {
              return (
                <div className="sampleText">
                  <h4>Ecospark Changing Currents Maps</h4>
                  <p>Built using: jQuery, Google Maps JS API</p>
                  <p>Upgraded online maps to illustrate relationships between land use, greenspace, and stream health using Google APIs: Maps, Drive, and Fusion Tables</p>
                </div>
                )
              }

              function SampleText2() {
                  return (
                    <div className="sampleText">
                      <h4>"Pop Task" project</h4>
                      <p>Built using: React, Express, and Mongoose</p>
                      <p>I built this application as a final project for the HackerYou Full-Stack Development course. Pop Task can be used to manage daily tasks and track time with a minimum of distraction.</p>
                    </div>
                    )
                  }

              function SampleText3() {
                  return (
                    <div className="sampleText">
                      <h4>LCBO API project</h4>
                      <p>Built using: HTML5, CSS3, jQuery. Responsive.</p>
                      <p>This application was a project for the HackerYou Full-Stack Development course. It connects to the LCBO API using AJAX and displays data on beers and store locations.</p>
                    </div>
                    )
                  }

              function SampleText4() {
                  return (
                    <div className="sampleText">
                      <h4>Marlene Goldman profile site</h4>
                      <p>Built using: WordPress.org, CSS</p>
                      <p>I designed this site by customizing a WordPress theme using CSS to showcase Goldman's work as a public academic and to publicize her upcoming film release.</p>
                    </div>
                    )
                  }

          var sampleText;
          if(this.props.selectedImg===1){
            sampleText = <SampleText1/>;
          }else if(this.props.selectedImg===2){
            sampleText = <SampleText2/>;
          }else if(this.props.selectedImg===3){
            sampleText = <SampleText3/>;
          }else if(this.props.selectedImg===4){
            sampleText = <SampleText4/>;
          }
          return (
            <div className="imageWrap">
              <div className="placeholder"></div>
              <img className={this.props.imgClass(1)} src="ecospark.png" alt="EcoSpark Map" onClick={() => this.props.imgClick(1)}/>
              <img className={this.props.imgClass(2)} src="poptask.png" alt="Pop-Task App" onClick={() => this.props.imgClick(2)}/>
              <button className={"close" + this.props.closeClass()} onClick={this.props.close}>X</button>
              <img className={this.props.imgClass(3)} src="lcbo_api.png" alt="LCBO API app" onClick={() => this.props.imgClick(3)}/>
              <img className={this.props.imgClass(4)} src="mgoldman.png" alt="Marlene Goldman site" onClick={() => this.props.imgClick(4)}/>
              {sampleText}
            </div>
          )
  }
}

export default Samples;
