import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { editCard } from "../redux/cardsSlice";

const EditCard = ({ title, detail, id, editClicked, setEditClicked }) => {
  const dispatch = useDispatch();
  const [editedTitle, setEditedTitle] = useState(title);
  const [editedDetail, setEditedDetail] = useState(detail);

  const handleEdit = (e) => {
    e.preventDefault();
    dispatch(
      editCard({
        id: id,
        title: editedTitle,
        detail: editedDetail,
      })
    );
    setEditClicked(!editClicked);
  };

  return (
    <div style={{ width: "500px", height: "200px" }}>
      <form onSubmit={handleEdit}>
        <div className="row mb-3">
          <label htmlFor="title" className="col-sm-2 col-htmlForm-label">
            Title
          </label>
          <div className="col-sm-10">
            <input
              type="text"
              className="htmlForm-control"
              id="title"
              value={editedTitle}
              onChange={(e) => setEditedTitle(e.target.value)}
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
              value={editedDetail}
              onChange={(e) => setEditedDetail(e.target.value)}
            />
          </div>
        </div>
        <button type="submit" className="btn btn-dark">
          Save Changes
        </button>
      </form>
    </div>
  );
};

export default EditCard;
