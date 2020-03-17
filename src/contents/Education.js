import React, { Component } from 'react';
import Widecard from '../components/Widecard';

class Education extends Component {
   render() {
      return (
         <div className="condiv">
            <h1 className="education">My Education</h1>
            <Widecard title="Software Engineer/Information Systems" where="San Francisco State University/Hack Reactor" from="July 2017" to="Present" />
            <Widecard title="Doctor" where="Middle Higher Secondary School" from="2011" to="2017" />
            <Widecard title="Gamer " where="TRP Higher Secondary School" from="2001" to="2027" />
            <Widecard title="Lover" where="Jefferson Higher Secondary School" from="2051" to="2037" />
            <Widecard title="Productive" where=" Secondary School" from="2051" to="2067" />
         </div>
      )
   }
}


export default Education;