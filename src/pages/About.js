import React, { Component } from 'react';
import "./About.css";
import yourpic from "../assets/me.jpg";
  
export default class About extends Component {
  render() {
    return (
      <div>
    <div class="split left">
      <div className="centered">
        <img 
          className="profile_image"
          src={yourpic}
          alt="Profile Pic"
          ></img>
      </div>
    </div>
    <div className="split right">
      <div className="centered">
        <div className="name_title">Guilherme Noronha Rigaud</div>
        <div className="brief_description">
        I am a passionate Full Stack Software Developer with a concentration in Project Management!
        </div>
      </div>
    </div>
  </div>
    )
  }
}