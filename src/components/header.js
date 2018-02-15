import React from 'react';
import '../css/header.css';

class Header extends React.Component {
  render() {
    return (
        <nav className="">
            <div className="">
                <h5 className="amerigo">AMERIGO&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;SCOTT&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;CARDINALI</h5>
                {/* <h5 className="cardinali">CARDINALI</h5> */}
            </div>
        </nav>
    );
  }
}

export default Header;