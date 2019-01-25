import React, { Component } from 'react';

export default class Tooltip extends Component {
  constructor(props) {
    super(props);

    this.state = {
      displayTooltip: false
    };
    this.hideTooltip = this.hideTooltip.bind(this);
    this.showTooltip = this.showTooltip.bind(this);
    this.toggleTooltip = this.toggleTooltip.bind(this);
  }

hideTooltip () {
  this.setState({displayTooltip: false});

}
showTooltip () {
  this.setState({displayTooltip: true});
}
toggleTooltip(){
   this.setState({ displayTooltip: !this.state.displayTooltip });
}
  render() {
    if(this.props.type==='hover'){
      return (
        <span className='tooltip'
            onMouseLeave={this.hideTooltip}
            onMouseOver={this.showTooltip}
          >
          {this.state.displayTooltip &&
          <div className={'tooltip-bubble tooltip-right'}>
            <div className='tooltip-message'>{this.props.text}</div>
          </div>
          }
            {this.props.children}
        </span>
      )
    }
    else{
      return (
        <span className='tooltip'
            onClick={this.toggleTooltip}
          >
          {this.state.displayTooltip &&
          <div className={'tooltip-bubble tooltip-right'}>
            <div className='tooltip-message'>{this.props.text}</div>
          </div>
          }
            {this.props.children}
        </span>
      )

    }
  }
}
