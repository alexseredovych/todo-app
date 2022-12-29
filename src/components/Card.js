import React from "react";
import cardList from "../data/todoList.json";

export const Card = ({ title, detail }) => {
  return (
    <div className="card text-bg-primary mb-3" style={{ maxWidth: "18rem" }}>
      <div className="card-header">
        <h5>{title}</h5>
      </div>
      <div className="card-body">
        <p className="card-text">{detail}</p>
      </div>
      <div className="btn-group">
        <button type="button" className="btn btn-warning btn-sm">
          Edit Card
        </button>
        <button type="button" className="btn btn-success btn-sm">
          Mark Completed
        </button>
      </div>
    </div>
  );
};

export default Card;
