import React, { useContext, useState } from "react";
// import DynamicCounter from "./DynamicCounter";
import { useNavigate } from "react-router";
import { ProductsContext } from "../Context/Product";

export default function ProductCard({
  id,
  title,
  description,
  price,
  image,
  cartCount,
  setCartCount,
}) {
  const navigate = useNavigate();
  const {cartNums, setCartNums} = useContext(ProductsContext)
  let [count, setCount] = useState(0);
  const handlerAdd = () => {
    setCount(count + 1);
    setCartCount(cartCount + 1);
    setCartNums(cartNums +1)
  };
  const handlerRemove = () => {
    setCount(count - 1);
    setCartCount(cartCount - 1);
    setCartNums(cartNums -1)
  };
  const gotoDetails = (id) => {
    navigate(`${id}`);
  };

  return (
    <>
      <div className="card h-100">
        {cartNums}
        <img
          src={image}
          className="card-img-top"
          alt="..."
          style={{ height: "300px", cursor: "pointer" }}
          onClick={() => gotoDetails(id)}
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

                {/* <DynamicCounter /> */}

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
