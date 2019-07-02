import React from 'react';
import Header from './header';
import Links from './links';
import '../css/app.css';


class App extends React.Component {

    render() {
      
      return (
        <div>
            <Header />
            <Links />     
        </div>
      );
    }
  }



export default App;