import { useSelector,useDispatch } from "react-redux";
import {removeItem} from './redux-toolkit/slice';


function Cart() {

    const dispatch=useDispatch()
    const selector=useSelector((state)=>state.cart);
    const cartItems=selector.items;

    const totalPrice = cartItems.reduce(
        (total, item) => total + item.price * item.quantity,
        0
    );

  return (
    <div className="cart-container">
      <h2>🛒 My Cart</h2>

      {cartItems.length === 0 ? (
        <p className="empty-cart">Your cart is empty!</p>
      ) : (
        <>
          <div className="cart-items">
            {cartItems.map((item) => (
              <div className="cart-item" key={item.id}>
                <img
                  src={item.thumbnail}
                  alt={item.title}
                />

                <div className="cart-item-info">
                  <h4>{item.title}</h4>

                  <p>Price: ${item.price}</p>

                  <p>Quantity: {item.quantity}</p>

                  <p>
                    Subtotal: $
                    {(item.price * item.quantity).toFixed(2)}
                  </p>
                </div>

                <button
                  className="remove-btn"
                  onClick={() => dispatch(removeItem(item.id))}
                >
                  Remove
                </button>
              </div>
            ))}
          </div>

          <div className="cart-total">
            <h3>
              Total: ${totalPrice.toFixed(2)}
            </h3>
          </div>
        </>
      )}
    </div>
  );
}

export default Cart;
