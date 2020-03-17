import React, { Component } from 'react';
import Social from '../components/Social';

class Contact extends Component {
   render() {
      return (
         <div className="condiv">
            <h1 className="contact"> Contact Me </h1>
            <h3>Email: steveantonio00@gmail.com</h3>
            <h3>Instagram : steve.antionio00 </h3>
            <Social />
         </div>
      )
   }
}

export default Contact;