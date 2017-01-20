import React, { Component } from 'react';

class Panel extends Component {

  render() {
      return (
        <div className={'panel ' + this.props.label + this.props.hidePanel(this.props.label)  + this.props.brightPanel(this.props.label)} onClick={()=>this.props.reveal(this.props.label)}>
          <div className={'panelContent' + this.props.hideContent(this.props.label)}>
          <h3 className={'titleText titleText'+ this.props.label}>{this.props.titleText}</h3>
          {this.props.children}
          </div>
        </div>
      )
  }
}

export default Panel;
