import React, { useEffect } from "react";
//import React, { useEffect,useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Product from "../components/Product.js";
//import axios from "axios";
import LoadingBox from "../components/LoadingBox.js";
import MessageBox from "../components/MessageBox.js";
import { listProducts } from "../actions/productActions.js";

export default function HomeScreen() {
  // USING REACT HOOKS
  // const [products, setProducts] = useState([]);
  // const [imageurl, setImageurl] = useState("");
  // const [loading, setLoading] = useState(false);
  // const [error, setError] = useState(false);

  //   useEffect(() => {
  //   const fetchdata = async () => {
  //     try {
  //       setLoading(true);
  //       const { data } = await axios.get("/api/products");
  //       setLoading(false);
  //       setProducts(data.products);
  //       setImageurl(data.imgURL);
  //     } catch (err) {
  //       setError(err.message);
  //       setLoading(false);
  //     }
  //   };
  //   fetchdata();
  // }, []);

  // USING REDUX
  const productList = useSelector((state) => state.productList);
  const { loading, error, products } = productList;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);

  return (
    <div>
      {loading ? (
        <LoadingBox></LoadingBox>
      ) : error ? (
        <MessageBox variant="danger">{error}</MessageBox>
      ) : (
        <div className="row left">
          {products.map((product) => (
            <Product key={product._id} product={product} />
          ))}
          ;
        </div>
      )}
    </div>
  );
}
