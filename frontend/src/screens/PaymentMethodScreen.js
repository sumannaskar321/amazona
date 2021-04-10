import CheckoutSteps from "../components/CheckoutSteps";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { savePaymentMethod } from "../actions/cartActions";

export default function PaymentMethodScreen(props) {
  const cart = useSelector((state) => state.cart);
  const { shippingAddress, paymentMethod } = cart;
  if (!shippingAddress.address) {
    props.history.push("/shipping");
  }
  const [PaymentMethod, setPaymentMethod] = useState(paymentMethod);

  const dispatch = useDispatch();
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(savePaymentMethod(PaymentMethod));
    props.history.push("/palceorder");
  };
  return (
    <div>
      <CheckoutSteps step1 step2 step3></CheckoutSteps>
      <form className="form" onSubmit={submitHandler}>
        <div>
          <h1>Payment Method</h1>
        </div>
        <div>
          <div>
            <input
              type="radio"
              id="paypal"
              name="paymentMethod"
              value="PayPal"
              required
              checked
              onChange={(e) => setPaymentMethod(e.target.value)}></input>
            <label htmlFor="paypal">PayPal</label>
          </div>
        </div>
        <div>
          <div>
            <input
              type="radio"
              id="stripe"
              name="paymentMethod"
              value="Stripe"
              required
              onChange={(e) => setPaymentMethod(e.target.value)}></input>
            <label htmlFor="stripe">Stripe</label>
          </div>
        </div>
        <div>
          <button type="submit" className="primary">
            Continue
          </button>
        </div>
      </form>
    </div>
  );
}
