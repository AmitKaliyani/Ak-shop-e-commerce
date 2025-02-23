import React, { useEffect } from "react";
import { HiTrash } from "react-icons/hi2";
import { useDispatch, useSelector } from "react-redux";
import {
  CALCULATE_TOTAL,
  DECREASE,
  EMPTY_CART,
  INCREASE,
  REMOVE_FROM_CART,
  selectCartItems,
  selectTotal,
} from "../redux/cartSlice";
import { useNavigate, useLocation } from "react-router";

const Cart = () => {
  const cartItems = useSelector(selectCartItems);
  const dispatch = useDispatch();
  const totalPrice = useSelector(selectTotal);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    dispatch(CALCULATE_TOTAL());
  }, [cartItems]);

  const handleCheckout = () => {
    if (cartItems.length === 0) {
      navigate("/cart");
    } else if (sessionStorage.getItem("cred") != null) {
      navigate("/thankyou");
    } else {
      navigate("/login", { state: { path: location.pathname } });
    }
  };

  return (
    <div className="max-w-7xl mt-15 p-6 sm:p-8">
      <h1 className="text-4xl font-bold mb-8 text-gray-800">Shopping Cart</h1>
      <div className="flex flex-col lg:flex-row gap-6 lg:gap-12">
        {/* Cart Items Section */}
        <div className="flex-1">
          <div className="bg-white shadow-lg rounded-lg p-6">
            {cartItems.length === 0 && (
              <h1 className="text-center text-lg">No items in Cart</h1>
            )}
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-between py-6 border-b border-gray-200"
              >
                <div className="flex items-center gap-6">
                  <img
                    src={item.images[0]}
                    alt={item.title}
                    className=" w-10 h-10 sm:w-20 sm:h-20 object-cover rounded-lg"
                  />
                  <div>
                    <h2 className="text-lg sm:text-xl font-semibold text-gray-800">
                      {item.title}
                    </h2>
                    <p className="text-gray-600">
                      Price: ${Number(item.price).toFixed(2)}
                    </p>
                    <div className="flex items-center mt-2">
                      <label
                        htmlFor={`quantity-${item.id}`}
                        className="mr-3 text-gray-700 text-sm sm:text-base"
                      >
                        Quantity:
                      </label>
                      <button
                        className="w-6 sm:w-8 text-center text-sm sm:text-base"
                        onClick={() => dispatch(DECREASE(item))}
                      >
                        -
                      </button>
                      <input
                        type="text"
                        value={item.qty}
                        className="w-12 text-center sm:w-16 text-sm sm:text-base"
                      />
                      <button
                        className="w-6 sm:w-8 text-center text-sm sm:text-base"
                        onClick={() => dispatch(INCREASE(item))}
                      >
                        +
                      </button>
                    </div>
                    <p className="text-gray-600 mt-2">
                      Total Price: ${Number(item.price * item.qty).toFixed(2)}
                    </p>
                  </div>
                </div>
                <button
                  className="text-red-500 hover:text-red-700 cursor-pointer"
                  onClick={() => dispatch(REMOVE_FROM_CART(item.id))}
                >
                  <HiTrash className="h-6 w-6" />
                </button>
              </div>
            ))}
          </div>
        </div>

        <div className="lg:w-1/3 w-full">
          <div className="bg-white shadow-lg p-6 sm:p- rounded-lg">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">
              Order Summary
            </h2>
            <div className="flex justify-between text-base sm:text-lg mb-4">
              <span className="text-gray-700">Subtotal</span>
              <span className="font-medium text-gray-900">
                ${Number(totalPrice).toFixed(2)}
              </span>
            </div>
            <div className="flex justify-between text-base sm:text-lg mb-4">
              <span className="text-gray-700">Shipping</span>
              <span className="font-medium text-gray-900">
                ${totalPrice < 200 && totalPrice.length != 0 ? "5.00" : "0.00"}
              </span>
            </div>
            <div className="flex justify-between text-xl sm:text-2xl font-bold border-t pt-6">
              <span>Total</span>
              <span className="text-gray-900">
                + $
                {totalPrice < 200 && totalPrice !== 0
                  ? (totalPrice + 5).toFixed(2)
                  : Number(totalPrice).toFixed(2)}
              </span>
            </div>
            <div className="flex flex-col  gap-4 mt-8">
              <button
                className="bg-red-600 text-white py-2 px-4 rounded-lg text-lg font-medium hover:bg-red-700 transition duration-200 max-w-xs sm:max-w-sm mx-auto"
                onClick={() => dispatch(EMPTY_CART())}
              >
                Empty Cart
              </button>
              <button
                className={`bg-indigo-600 text-white py-2 px-4 rounded-lg text-lg font-medium ${
                  cartItems.length === 0
                    ? "opacity-50 cursor-not-allowed"
                    : "hover:bg-indigo-700 transition-all duration-300 cursor-pointer"
                } sm:py-3 sm:px-6 max-w-xs sm:max-w-sm mx-auto`}
                onClick={handleCheckout}
                disabled={cartItems.length === 0}
              >
                Proceed to Checkout
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
