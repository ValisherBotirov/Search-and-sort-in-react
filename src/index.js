import React from "react";
import ReactDOM from "react-dom";
import MainProduct from "./MainProduct.js";

const Product = [
  {
    price: "$3.10",
    stocked: true,
    name: "Shaftoli",
  },
  {
    price: "$3.40",
    stocked: true,
    name: "Gilos",
  },
  {
    price: "$1.80",
    stocked: false,
    name: "Nok",
  },
  {
    price: "$2.00",
    stocked: true,
    name: "Sut",
  },
  {
    price: "$1.50",
    stocked: false,
    name: "Olma Sharbati",
  },
  {
    price: "$0.30",
    stocked: true,
    name: "Mineral Suv",
  },
];

ReactDOM.render(
  <MainProduct products={Product} />,
  document.getElementById("root")
);
