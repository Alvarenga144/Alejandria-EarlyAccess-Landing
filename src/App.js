import React from "react";
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero'
import { Conversations } from './components/Conversations'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Conversations />
    </div>
  );
}

export default App;
