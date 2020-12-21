import react, { useState } from 'react';
import Accordion from './Sidebar/Accordion/Accordion';
import './App.css';
import Search from './Sidebar/Search/Search';
import Sidebar from './Sidebar/Sidebar';

function App() {

  

  return (
    <div className="app">
      <h1>i'm app</h1>
        {/* <Search /> */}
        <Sidebar />
        

    </div>
  );
}

export default App;
