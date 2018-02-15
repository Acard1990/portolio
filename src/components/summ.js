import React from 'react';
import '../css/summ.css';
import '../css/caro.css';


class Summary extends React.Component {
  render() {
    return (
      <div className="linkedin">
      <a href='https://www.linkedin.com/in/scott-cardinali-10b212a6/'>
      <img src={require("./linkedin.jpg")} />
      </a> 
      <div>
        <div class="space">
          <a svg ="./github-250.svg" class="btn button1 fx" href="https://github.com/Acard1990">Github Profile</a>
          <a class="btn button2 fx" href="https://suite32.herokuapp.com/signup">Suite32</a>
          <a  class="btn button3 fx" href="http://the-taskie-app.herokuapp.com/">Taskie</a>
        </div>
      </div>
      </div>
    );
  }
}

export default Summary;