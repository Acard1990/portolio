import React from 'react';
import '../css/unitselector.css';
// import headshot from './headshot.jpg';

class Unit extends React.Component {
  render() {
    return (
      <div className="accordion"> 
        <img src={require("./headshot.jpg")} />
        <div className="summary"> 
        <a>
          Hi, Welcome to my Portfolio. Im an Experienced Broadcast professional with a demonstrated history of working in the broadcast 
          media industry. Skilled in Broadcast Operations, Broadcast Systems Engineering and 
          a growing passion for all things coding and development. Recent graduate from 
          Georgia Tech's Full Stack Web Development program. Please have a look around, and checkout some of my previous work. 
        </a>
      </div>
        {/* <a href="#" className="accordion-toggle">Welcome</a>
          <div className="accordion-content">
            <div className="accordion-inner"> 
              <p>I am happy to see you have found my portfolio.</p>
              <p>Please have a look around.</p> 
            </div>
          </div> */}
      </div>
    );
  }
}

export default Unit;