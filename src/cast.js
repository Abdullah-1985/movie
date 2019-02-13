import React, { Component } from 'react';
import './App.css';

class Cast extends Component {
    render() {
      return (
      <div>
        <p>{this.props.castname.name}:{this.props.castname.role}</p>
      </div>
      );
    }
  }
  export default Cast;
  