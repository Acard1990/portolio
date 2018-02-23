import React from 'react';
import Header from './header';
import Unit from './unitselector';
import Summary from './summ';
// import { ParallaxProvider } from 'react-scroll-parallax';
import '../css/app.css';

class App extends React.Component {
    render() {
      return (
        <div>
            <Header />
            <Unit />
            <Summary />     
        </div>
      );
    }
  }



export default App;