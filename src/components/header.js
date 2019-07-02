import React from 'react';
import '../css/header.css';

class Header extends React.Component {

  render() {

    return (
            <div>
                <h3 className="beginning">Welcome, my name is <span className="name">Scott Cardinali</span>. <br/>
                                            Full Stack Web Developer<br/>
                                            &amp;<br/>
                                            Broadcast Systems Professional.</h3>
            </div>
    )
  }
}

export default Header;
