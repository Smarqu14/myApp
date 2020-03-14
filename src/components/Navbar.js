import React, { Component } from 'react';
import Navitem from './Navitem';


class Navbar extends Component {
   constructor(props) {
      super(props);

      this.state = {
         NavItemActive: ''
      }
   }
   // activeitem = (x) => {
   //    if (this.state.NavItemActive.length > 0) {
   //       document.getElementById(this.state.NavItemActive).classList.remove('active');

   //    }
   //    this.setState({
   //       NavItemActive: x
   //    }, () => {
   //       document.getElementById(this.state.NavItemActive).classList.add('active')
   //    });
   // };

   render() {
      return (
         <nav>
            <ul>
               <Navitem item="Home" tolink="/" activec={this.activeitem}/>
               <Navitem item="About" tolink="/about" activec={this.activeitem}/>
               <Navitem item="Education" tolink="/education" activec={this.activeitem}/>
               <Navitem item="Skills" tolink="/skills" activec={this.activeitem}/>
               <Navitem item="Contant" tolink="/contact" activec={this.activeitem}/> 
               <Navitem item="Projects" tolink="/projects" activec={this.activeitem}/> 
            </ul>
         </nav>
      )
   }
}

export default Navbar;