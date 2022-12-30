import React from "react";
import { useSelector } from "react-redux";

const CompletedCards = () => {
  const completedCards = useSelector((state) =>
    state.cards.filter((card) => card.completed === true)
  );

  return (
    <div>
      <h3>Total Completed Tasks:</h3>
      <h4>{completedCards.length}</h4>
    </div>
  );
};

export default CompletedCards;
