import React from 'react';
import Header from './header';
import Spinner from './spinner';
import Links from './links';
import '../css/app.css';


class App extends React.Component {

            // constructor(props){
            //   super(props);
            //   let pageHeight = document.documentElement.offsetHeight;
            //   let pageWidth = document.documentElement.offsetWidth;
            //   console.log(pageWidth);
            //   console.log(pageHeight);
            //
            // }
//============================================================================
            componentDidMount() {
              console.log("document-height",document.documentElement.offsetHeight);
              console.log("document-width",document.documentElement.offsetWidth);
            }


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
