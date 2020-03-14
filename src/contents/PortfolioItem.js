import React from 'react';

const PortfolioItem = (props) => (
   <div className="condiv">
      <h1>My work </h1>
      <p>This the current id that matches your search {props.match.params.id}</p>
   </div>
)

export default PortfolioItem;