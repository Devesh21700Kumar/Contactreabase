import React, { Component } from 'react';
import axios from 'axios';
import Contacts from './components/Contacts';




function App(){
return(
<div className='row'>
  <div className='col-md-8 offset-md-1'>
    <Contacts/>
  </div>
</div>
);
}

export default App;