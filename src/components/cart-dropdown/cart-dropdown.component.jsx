import React from "react";

import CustomButton from "./../custom-button/custom-buttom.component";

import "./cart-dropdown.styles.scss";

const CartDropdown = () => {
  return (
    <div className="cart-dropdown">
      <div className="cart-items" />
      <CustomButton>Go To CheckOut</CustomButton>
    </div>
  );
};

export default CartDropdown;
