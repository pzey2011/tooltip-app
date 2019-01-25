import React, { Component } from 'react';

export default class Tooltip extends Component {
  constructor(props) {
    super(props);

    this.state = {
      displayTooltip: false
    };
    this.hideTooltip = this.hideTooltip.bind(this);
    this.showTooltip = this.showTooltip.bind(this);
  }

hideTooltip () {
  this.setState({displayTooltip: false});

}
showTooltip () {
  this.setState({displayTooltip: true});
}
  render() {
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
}
