import React, { Component } from 'react';
import Navitem from './Navitem';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLaptop } from '@fortawesome/free-solid-svg-icons';

class Navbar extends Component {
   constructor(props) {
      super(props);
      
      this.state = {
         navItemActive:true
      }
      this.activateitem = this.activateitem.bind(this);
   }
   
   activateitem(){
      this.setState(state => ({
         navItemActive: !state.navItemActive
      }));
   }
   render() {
      return (
         <nav>
            <ul className="menu">
               <Navitem item="Home" tolink="/" active={this.activateitem} />
               <Navitem item="About" tolink="/about" active={this.activateitem} />
               <Navitem item="Education" tolink="/education" active={this.activateitem} />
               <Navitem item={<FontAwesomeIcon icon={faLaptop} size="1x" />} tolink="/" active={this.activateitem} />
               <Navitem item="Skills" tolink="/skills" active={this.activateitem} />
               <Navitem item="Contact" tolink="/contact" active={this.activateitem} />
               <Navitem item="Projects" tolink="/projects" active={this.activateitem} />
            </ul>
         </nav>
      )
   }
}

export default Navbar;