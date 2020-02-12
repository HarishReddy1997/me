import React from 'react';
import './App.css';
import Head from './Compopnent/Head'
import Nav from './Compopnent/Nav'
import About from './Compopnent/About'
import Timeline from './Compopnent/Timeline'
function App() {
  return (
    <div className="App">
      <Nav />
       <Head />
       <About />
       <Timeline />
    </div>
  );
}

export default App;
