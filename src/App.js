import React from "react";
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Conversations } from './components/Conversations';
import { Facts } from './components/Facts';
import { SecondHero } from './components/SecondHero/index';
import { FloatMessages } from './components/FloatMessages';
import { NewsInformation } from './components/NewsInformation';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Conversations />
      <Facts />
      <SecondHero />
      <FloatMessages />
      <NewsInformation />
    </div>
  );
}

export default App;
