import React, { useState } from "react";
import { IProduct } from "../models";

import Error from "./Error";


interface FilterProductProps{
    onFilter: (product: IProduct)=> void
}
const FilterProduct = ({onFilter}:FilterProductProps) => {
  const [value, setValue] = useState("");
   const [error, setError] = useState("");

  const filterOnTitle = async (e: React.FormEvent) => {
    e.preventDefault();
  };




  return (
    <form onSubmit={filterOnTitle}>
      <input
        type="text"
        className=""
        placeholder="Enter product title.."
        value={value}
        onChange={(event) => setValue(event.target.value)}
      />
      {error && <Error error={error} />}
      <button className="">
        Find
      </button>
    </form>
  );
};

export default FilterProduct;
