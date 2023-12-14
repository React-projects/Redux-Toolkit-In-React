import { useDispatch, useSelector } from "react-redux";
import { addProduct, fetchAction } from "../RTK/slices/prodcut-slice";
import { useEffect } from "react";
import { fetchProducts } from "../RTK/slices/prodcut-slice";
function Products() {
  const Products = useSelector((state) => state.product);
  const dispatch = useDispatch();
  console.log(Products);

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  return (
    <h1>
      products
      <button
        onClick={() => dispatch(addProduct({ id: 2, title: "Product2" }))}
      >
        Add product
      </button>
      {/* {Products.map((pross) => (
        <h1 key={pross.id}>{pross.title}</h1>
      ))} */}
      {Products.map((number) => (
        <h1 key={number.id}>{number.title}</h1>
      ))}
    </h1>
  );
}

export default Products;
