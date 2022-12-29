import React from "react";
import Navbar from "./Navbar";
import CardForm from "./CardForm";
import Card from "./Card";
import cardList from "../data/todoList.json";

export const Home = () => {
  return (
    <div>
      <Navbar />
      <CardForm />
      {cardList.cards.map((card) => (
        <Card key={card.id} title={card.title} detail={card.detail} />
      ))}
    </div>
  );
};

export default Home;
