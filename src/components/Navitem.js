import React from 'react';
import { NavLink } from 'react-router-dom';


const Navitem = (props) => {
      return (
         <li className="item active">
            <NavLink to={props.tolink} onClick={props.active}> {props.item} </NavLink>      
         </li>
      )
  }

export default Navitem;

