import React from "react";
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = "pk_test_TD3bJFY6vKMBXowUkCZphnfe";

  const onToken = token => {
    console.log(token);

    axios({
      url: "payment",
      method: "post",
      data: {
        amount: priceForStripe,
        token: token
      }
    })
      .then(response => {
        alert("Sucessful payment");
      })
      .catch(error => {
        console.log("Payment Error: ", error);
        alert(
          "There was an issue with your payment! Please make sure you use the provided credit card."
        );
      });
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
