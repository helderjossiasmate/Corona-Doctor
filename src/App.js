import React from 'react';
import Header from './components/header';
import Hero from './components/hero';
import WorldStatus from './components/worldstatus';
import Prevention from './components/prevention';
import './style/style.css';

function App() {

  return (
    <div>
      <Header />
      <Hero />    
      <WorldStatus />
      <Prevention />
    </div>
  );
}
 
export default App;
