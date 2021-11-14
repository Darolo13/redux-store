import React, { useEffect } from "react";
import { useQuery } from '@apollo/client';

import spinner from "../../assets/spinner.gif"

import { QUERY_PRODUCTS } from "../../utils/queries";
import { idbPromise } from "../../utils/helpers";

import ProductItem from "../ProductItem";

import { useSelector, useDispatch } from 'react-redux';
import { UPDATE_PRODUCTS } from "../../redux/ProductReducers";

function ProductList() {

  const products = useSelector(state => state.products);
  const currentCategory = useSelector(state => state.currentCategory)
  const dispatch = useDispatch();

  const { loading, data } = useQuery(QUERY_PRODUCTS);

  useEffect(() => {
    if (data) {
      dispatch(UPDATE_PRODUCTS(data.products))
      data.products.forEach((product) => {
        idbPromise('products', 'put', product);
      });
    } else if (!loading) {
      idbPromise('products', 'get').then((products) => {
        dispatch(UPDATE_PRODUCTS(products));
      });
    }
  }, [data, loading, dispatch]);

  function filterProducts() {
    if (!currentCategory) {
      return products;
    }

    return products.filter(product => product.category._id === currentCategory);
  }

  return (
    <div className="my-2">
      <h2>Our Products:</h2>
      {products.length ? (
        <div className="flex-row">
          {filterProducts().map(product => (
            <ProductItem
              key={product._id}
              _id={product._id}
              image={product.image}
              name={product.name}
              price={product.price}
              quantity={product.quantity}
            />
          ))}
        </div>
      ) : (
        <h3>You haven't added any products yet!</h3>
      )}
      {loading ?
        <img src={spinner} alt="loading" /> : null}
    </div>
  );
}

export default ProductList;
