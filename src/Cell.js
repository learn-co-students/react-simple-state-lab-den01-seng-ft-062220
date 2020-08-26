import React, { Component } from "react";

export default class Cell extends Component {

  state = {
    color: this.props.value
  }

  render() {
    return (
      <div 
        className="cell"
        style={{backgroundColor: this.state.color}}
        onClick= {() => this.setState({color: '#333'})}>
      </div>
    )
  }
}