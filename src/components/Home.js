import React from "react";
import Navbar from "./Navbar";
import CardForm from "./CardForm";
import Card from "./Card";
import CompletedCards from "./CompletedCards";
import { useSelector } from "react-redux";

export const Home = () => {
  const cards = useSelector((state) => state.cards)

  return (
    <div>
      <Navbar />
      <CardForm />
      {cards.map((card) => (
        <Card key={card.id} id={card.id} title={card.title} detail={card.detail} completed={card.completed} />
      ))}
      <CompletedCards />
    </div>
  );
};

export default Home;
