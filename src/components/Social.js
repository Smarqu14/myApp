import React, { Component } from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faMedium, faInstagram } from '@fortawesome/free-brands-svg-icons';

class Social extends Component {
   render() {
      return (
         <div className="social">
            <a href="https://github.com/Smarqu14" rel="noopener noreferrer" target="_blank"><FontAwesomeIcon icon={faGithub} size="2x"/></a>
            <a href="https://www.linkedin.com/in/steveantonio00/" rel="noopener noreferrer" target="_blank"><FontAwesomeIcon icon={faLinkedin} size="2x"/></a>
            <a href="https://medium.com/@steveantonio00" rel="noopener noreferrer" target="_blank"><FontAwesomeIcon icon={faMedium} size="2x"/></a>
            <a href="https://www.instagram.com/steve.antonio_/" rel="noopener noreferrer" target="_blank"><FontAwesomeIcon icon={faInstagram} size="2x"/></a>
         </div>
      )
   }
}
export default Social;