import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';


class Navitem extends Component {
   
   render() {

      return (
         <li id={this.props.item}>
            {/* <NavLink to={this.props.tolink} onClick={this.props.activec.bind(this, this.props.item)}>{this.props.item}</NavLink>       */}
            <NavLink to={this.props.tolink}> {this.props.item} </NavLink>      
         </li>

      )
   }
}
export default Navitem;

