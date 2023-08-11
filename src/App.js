import React from "react";
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Conversations } from './components/Conversations';
import { Facts } from './components/Facts';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Conversations />
      <Facts />
    </div>
  );
}

export default App;
