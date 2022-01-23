// import { Button, Form } from "react-bootstrap";
// import Rating from "./Rating";
import React from 'react';
import { CartState } from "../context/Context";

const Menu = () => {
  const {
    productDispatch,
    productState: { byStock, byFastDelivery, sort, byRating },
  } = CartState();

  // make state for rating

  return (
    <div className="filters">
      <span className="title">
        <a href="/">Prep-ShoppingCart</a>
      </span>
      <span>
        <a href="/">List Products</a>
      </span>
      <span>
        <a href="/addproduct">Add product</a>
      </span>
      <span>
        <a href="/listcategory">List Categories</a>
      </span>
      <span>
        <a href="/addcategory">Add Category</a>
      </span>
      <span>
        <a href="/profile">Profile</a>
      </span>
    </div>
  );
};


export default Menu;
