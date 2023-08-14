import React from "react";
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Conversations } from './components/Conversations';
import { Facts } from './components/Facts';
import { SecondHero } from './components/SecondHero/index';
import { FloatMessages } from './components/FloatMessages';
import { NewsInformation } from './components/NewsInformation';
import { Form } from './components/Form';
import { Footer } from './components/footer';

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
      <Form />
      <Footer />
    </div>
  );
}

export default App;
