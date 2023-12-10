import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Card from "./components/Card";
import cardData from "./Data";

function App() {
  const cardElements = cardData.map(card => {
    return <Card
      key={card.id}
      card={card}
    />
  })
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <section className="cards-list">
                {cardElements}
            </section>
    </div>
  );
}

export default App;
