import CartPage from "./CartPage";
import { Provider } from "react-redux";
import store from "./redux/store";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <>
      <div className="container-fluid bg-light">
        <nav className="navbar navbar-light bg-light justify-content-between p-3">
          <a className="navbar-brand logo fw-bold fs-4">Online Shopping</a>
          <a className="navbar-brand cart fw-bold" href="#">
            <img
              src="https://i.pngimg.me/thumb/f/720/5849379487350784.jpg"
              width="30"
              height="30"
              className="d-inline-block align-top"
              alt="cart-image"
            />
            Cart
          </a>
        </nav>

        <Provider store={store}>
          <CartPage />
        </Provider>
      </div>
    </>
  );
}

export default App;