import React, { Component } from 'react';

class Skills extends Component {
   constructor(props) {
      super(props);

      this.state = {
         skills: [
            'HTML',
            'CSS',
            'JavaScript',
            'React.JS',
            'AWS',
            'Express.JS',
            'MongoDB',
            'Jest',
            'Node.js'
         ]
      }
   }
   render() {
      const row = [];
      let skills = this.state.skills;

      skills.map((skill, i) => {
         row.push(<li key={i}> {skill} </li>)
      })

      return (
         <div className="condiv skills">
            <div className="skill">
               <h1>My Skills</h1>
               <ul>
                  {row}
               </ul>
            </div>
         </div>
      )
   }
}
export default Skills;