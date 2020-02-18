import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = "pk_test_TD3bJFY6vKMBXowUkCZphnfe";

  const onToken = token => {
    console.log(token);
    alert("Payment Successful");
  };
  return (
    <StripeCheckout
      name="CRWN Clothing Ltd."
      label="Pay Now"
      currency="USD"
      image="https://svgshare.com/i/CUz.svg"
      panelLabel="Pay Now"
      amount={priceForStripe}
      description={`Your total is $${price}`}
      shippingAddress
      billingAddress
      zipCode
      allowRememberMe
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
