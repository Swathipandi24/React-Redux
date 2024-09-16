import { useSelector, useDispatch } from "react-redux";
import Quantity from "./Quantity";
import { removeProduct } from "../redux/actions";

const Product = () => {
  const productDetails = useSelector((state) => state.products.productDetails);

  const dispatch = useDispatch();

  const handleRemove = (productId) => {
    dispatch(removeProduct(productId));
  };

  return (
    <>
      {productDetails.map((product) => (
        <div
          className="product d-flex justify-content-between m-2 p-2"
          key={product.id}
        >
          <div className="product-left">
            <div className="container">
              <div className="card mb-3" style={{ width: "500px" }}>
                <div className="row g-0">
                  <div className="col-md-4">
                    <img
                      src={product.thumbnail}
                      className="img-fluid rounded-start"
                      alt="product-image"
                      style={{ width: "350px", height: "250px" }}
                    />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h5 className="card-title text-start fs-4">
                        {product.title}
                      </h5>
                      <p className="card-text text-start fs-7">
                        <small className="text-muted">{product.brand}</small>
                      </p>
                      <p className="card-text text-start fs-6">
                        {product.description}
                      </p>
                      <p className="card-text text-start fs-7">
                        <small className="text-muted">{product.category}</small>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="product-right d-flex flex-column justify-content-between">
            <Quantity product={product} />
            <button
              onClick={() => handleRemove(product.id)}
              className="btn delete mb-5 me-5 fw-bold text-danger "
            >
              Remove
            </button>
          </div>
        </div>
      ))}
    </>
  );
};

export default Product;