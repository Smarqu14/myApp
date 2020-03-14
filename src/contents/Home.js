import React, { Component } from 'react';
import profilepicture from '../img/personal.jpeg';
import ReactTypingEffect from 'react-typing-effect';
import Social from '../components/Social'



class Home extends Component {
   render() {
      return (
         <div className="condiv home">
            <Social />
            <img src={profilepicture} className="profilepicture" alt="profile_picture"></img>
            <h1>I'm Steve</h1>
            <ReactTypingEffect 
               className="typingeffect" 
               text={['I am a web developer', 'I create']} 
               speed={100} 
               eraseDelay={600} 
            />
         </div>
      )
   }
}

export default Home;