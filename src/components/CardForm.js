import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addCard } from "../redux/cardsSlice";

export const CardForm = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [detail, setDetail] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(
      addCard({
        title: title,
        detail: detail,
      })
    );
    setTitle('')
    setDetail('')
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <div className="row mb-3">
          <label htmlFor="title" className="col-sm-2 col-htmlForm-label">
            Title
          </label>
          <div className="col-sm-10">
            <input
              type="text"
              className="htmlForm-control"
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
        </div>
        <div className="row mb-3">
          <label htmlFor="text" className="col-sm-2 col-htmlForm-label">
            Text
          </label>
          <div className="col-sm-10">
            <input
              type="text"
              className="htmlForm-control"
              id="text"
              value={detail}
              onChange={(e) => setDetail(e.target.value)}
            />
          </div>
        </div>
        {/* <div className="row mb-3">
          <label htmlFor="text" className="col-sm-2 col-htmlForm-label">
            Select Color of Card
          </label>
          <div className="col-sm-10">
            <input
              type="color"
              className="htmlForm-control"
              id="text"
            />
          </div>
        </div> */}

        <button type="submit" className="btn btn-dark">
          Add Todo
        </button>
      </form>
    </div>
  );
};

export default CardForm;
