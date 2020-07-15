import React, { Component } from 'react';
import './Navbar.css';

class Navbar extends Component {
  render() {
    return (
      <div className='navbar'>

<div id='bar'></div>
        <nav>
          <h1>Brand Name</h1>
          <ul>
            <li><a href='/'>Link1</a></li>
            <li><a href='/'>Link2</a></li>
            <li><a href='/'>Link3</a></li>
            <li><a href='/'>Link4</a></li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default Navbar;
