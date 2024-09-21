import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { getProductById } from "../API/product";

export default function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    (async () => {
      const data = await getProductById(id);
      // console.log(data);
      setProduct(data);
    })();
  }, [id]);

  if (!product) return <div> Loading ........ </div>;
  return (
    <>
      <div className="container py-5 my-5">
        <div className="row">
          <div className="col-md-10 offset-md-1">
            {id} {product?.id}
            <div className="card mb-3">
              <div className="row g-0">
                <div className="col-md-4">
                  <img
                    src={product?.image}
                    className="img-fluid rounded-start"
                    alt="..."
                  />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">{product?.title}</h5>
                    <p className="card-text">{product?.description}</p>
                    <p className="card-text">{product?.price}</p>
                    <p className="card-text d-flex justify-content-around">
                      <small className="text-body-secondary">Rating:</small>
                      <small className="text-body-secondary">
                        {product?.rating.rate}
                      </small>
                      <small className="text-body-secondary">
                        {product?.rating.count}
                      </small>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
