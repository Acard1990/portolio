import React from 'react';
import Header from './header';
import Unit from './unitselector';
// import Slider from './contactslider';
import Summary from './summ';
// import Caro from './caro';
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