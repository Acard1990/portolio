import React from 'react';
import Header from './header';
import Spinner from './spinner';
import Links from './links';
import '../css/app.css';


class App extends React.Component {

    render() {

      return (
        <div>
            <Header />
            <Spinner />
            <Links />
        </div>
      );
    }
  }



export default App;
