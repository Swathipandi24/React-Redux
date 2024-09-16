import { useSelector } from "react-redux";

const Summary = () => {
  const productDetails = useSelector((state) => state.products.productDetails);

  const subtotal = productDetails.reduce((acc, product) => {
    return parseInt(acc + product.price * product.quantity);
  }, 0);

  let shipping, shippingCharge;
  {
    productDetails.map((product) => {
      return (shippingCharge =
        product.shipping !== "Free" ? product.shipping : 0);
    });
  }

  shipping = shippingCharge === 0 ? "Free" : shippingCharge;
  let total = shipping === "Free" ? subtotal : subtotal + shipping;

  return (
    <div className="container-fluid fw-bold">
      <hr />
      <div className="subtotal d-flex justify-content-between">
        <p className="text-muted">SUBTOTAL:</p>
        <p> ${subtotal}</p>
      </div>
      <div className="shipping d-flex justify-content-between">
        <p className="text-muted">SHIPPING:</p>
        <p>{shipping === "Free" ? "Free" : `$${shipping}`}</p>
      </div>
      <hr />

      <div className="total d-flex justify-content-between">
        <p>TOTAL:</p>
        <p> ${total}</p>
      </div>

      <div className="offer d-flex justify-content-end">
        <p className="text-danger">Get Daily Cash with Nespota Card</p>
      </div>
    </div>
  );
};

export default Summary;