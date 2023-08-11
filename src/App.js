import React from "react";
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Conversations } from './components/Conversations';
import { Facts } from './components/Facts';
import { SecondHero } from './components/SecondHero/index';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Conversations />
      <Facts />
      <SecondHero />
    </div>
  );
}

export default App;
