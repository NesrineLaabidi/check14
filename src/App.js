import './App.css';
import React from 'react';
import ProfilePhoto from './img/N.jpg';
import FullName from './Profile/FullName.js';
import Address from './Profile/Address';
function App() {
  return (
    <div className='card'>
      <div className='lines'></div>
      <div className='imgbox'>
      <img src={ProfilePhoto} alt='Profile Photo'/>
      </div>
      <div className='content'>
        <div className='details'>
        <h2><FullName /></h2>
        <br/>
        <span><Address /></span>
        </div>

      </div>

      
      
      
    </div>
  );
}

export default App;
