import React, { useState } from "react";
import DynamicCounter from "./DynamicCounter";
import { useNavigate } from "react-router";

export default function ProductCard({ id, title, description, price, image }) {
  const navigate = useNavigate()
  let [count, setCount] = useState(0);
  const handlerAdd = () => {
    setCount(count + 1);
  };
  const handlerRemove = () => {
    setCount(count - 1);
  };
  const gotoDetails = (id) => {
    navigate(`${id}`)
  };

  return (
    <>
      <div className="card h-100">
        <img
          src={image}
          className="card-img-top"
          alt="..."
          style={{ height: "300px", cursor: "pointer" }}
          onClick={()=>gotoDetails(id)}
        />
        <div className="card-body">
          <h5 className="card-title">{title.split(" ", 2).join(" ")}</h5>
          <p className="card-text">{description}</p>
          <p className="card-text">{price}</p>
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

                <DynamicCounter />

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
