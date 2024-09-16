import React, { useState } from "react";
import DaynamicCounter from "./DaynamicCounter";

export default function ProductCard(props) {
  let [count, setCount] = useState(0);
  const handlerAdd = () => {
    setCount(count + 1);
  };
  const handlerRemove = () => {
    setCount(count - 1);
  };

  return (
    <>
      <div className="card h-100">
        <img
          src={props.image}
          className="card-img-top"
          alt="..."
          style={{ height: "300px" }}
        />
        <div className="card-body">
          <h5 className="card-title">{props.title.split(" ", 2).join(" ")}</h5>
          <p className="card-text">{props.description}</p>
          <p className="card-text">{props.price}</p>
          <div className="d-flex justify-content-evenly">
            {/* <button onClick={handlerAdd} className={`btn btn-primary ${count ? '' :`w-100`}`}> */}
            <button
              onClick={handlerAdd}
              className="btn btn-primary"
              style={{ width: count ? "" : "100%" }}
            >
              Add
            </button>
            {count ? (
              <>
                <span>{count}</span>

                <DaynamicCounter />
                <button onClick={handlerRemove} className="btn btn-danger">
                  Remove
                </button>
              </>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    </>
  );
}
