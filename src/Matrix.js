import React, { Component } from 'react';
import Cell from './Cell';


export default class Matrix extends Component {

  static defaultProps = {
    /* Make a default values prop for Matrix, which is a 10x10 array filled with the values '#F00' (red) */
    values:(new Array(10).fill(new Array(10).fill("#F00")))
  }
  
  genRow = (vals) => {
    vals.map(val => <Cell value={val}/>)
    // return vals.map(val => <div className="cell"></div>) // replace me and render a cell component instead!
  }
  
  genMatrix = () => {
    return this.props.values.map(rowVals => <div className="row">{this.genRow(rowVals)}</div>)
  }
  
  render() {
    return (
      <div id="matrix">
        {this.genMatrix()}
      </div>
    )
  }
  
}
