import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { decCartCounter, incCartCounter } from "../Redux/Slices/cartCounterSlicer";
import { decProductCount, incProductCount } from "../Redux/Slices/productSlicer";


export default function ProductCard({
  id,
  count,
  title,
  description,
  price,
  image,
}) {
  const navigate = useNavigate();
  const dispatch = useDispatch();


  const handlerAdd = (id) => {
    dispatch(incCartCounter())
    dispatch(incProductCount(id))

  };
  const handlerRemove = (id) => {
    dispatch(decCartCounter())
    dispatch(decProductCount(id))

  };
  const gotoDetails = (id) => {
    navigate(`${id}`);
  };

  return (
    <>
      <div className="card h-100">
        {/* {cartNums} */}
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
              onClick={()=>handlerAdd(id)}
              className="btn btn-primary"
              style={{ width: count ? "" : "100%" }}
            >
              Add
            </button>
            {count ? (
              <>
                <span>{count}</span>

                {/* <DynamicCounter /> */}

                <button onClick={()=>handlerRemove(id)} className="btn btn-danger">
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
