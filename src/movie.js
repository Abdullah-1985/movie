import React, { Component } from 'react';
import './App.css';
import Review from './review';
import Cast from './cast'
class Movie extends Component {
    render() {
      const cast =this.props.movie.cast.map(person=>{
        return <Cast castname={person}/>
      })
      return (
      <div>
        
        <h2>{this.props.movie.title}</h2>
        <img src={this.props.movie.poster}></img>
        <div>
        Rating: <strong>{this.props.movie.rating}</strong>
          </div>
        <p>
          {this.props.movie.description}
        </p>
       {cast}
      </div>
      );
    }
  }
  export default Movie;
  