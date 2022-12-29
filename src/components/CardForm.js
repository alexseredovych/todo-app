import React from "react";

export const CardhtmlForm = () => {
  return (
    <div>
      <form>
        <div className="row mb-3">
          <label htmlFor="title" className="col-sm-2 col-htmlForm-label">
            Title
          </label>
          <div className="col-sm-10">
            <input type="text" className="htmlForm-control" id="title" />
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
            />
          </div>
        </div>
        <div className="row mb-3">
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
        </div>
        
        <button type="submit" className="btn btn-dark">
          Add Todo
        </button>
      </form>
    </div>
  );
};

export default CardhtmlForm;
