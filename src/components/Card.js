import React from "react";
import { useDispatch } from "react-redux";
import { markCompleted, deleteCard } from "../redux/cardsSlice";
import { useState } from "react";
import EditCard from "./EditCard";

export const Card = ({ id, title, detail, completed }) => {
  const dispatch = useDispatch();
  const [editClicked, setEditClicked] = useState(false);

  const handleCompleted = () => {
    dispatch(
      markCompleted({
        id: id,
        completed: !completed,
      })
    );
  };

  const handleDelete = () => {
    dispatch(
      deleteCard({
        id: id,
      })
    );
  };

  return (
    <div className="container">
      {!completed && (
        <div
          className="card text-bg-primary mb-3"
          style={{ maxWidth: "18rem" }}
        >
          <div className="card-header">
            <h5>{title}</h5>
          </div>
          <div className="card-body">
            <p className="card-text">{detail}</p>
          </div>
          <div className="btn-group">
            <button
              type="button"
              className="btn btn-warning btn-sm"
              onClick={setEditClicked}
            >
              Edit Card
            </button>
            <button
              type="button"
              className="btn btn-danger btn-sm"
              onClick={handleDelete}
            >
              Delete Card
            </button>
            <input
              type="checkbox"
              checked={completed}
              onChange={handleCompleted}
            />
          </div>
        </div>
      )}
      {editClicked && (
        <EditCard
          title={title}
          detail={detail}
          id={id}
          editClicked={editClicked}
          setEditClicked={setEditClicked}
        />
      )}
    </div>
  );
};

export default Card;
