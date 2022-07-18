import { useState, useEffect } from "react";
import { Error, Loading } from "../utilsActions/imports";
import { Link } from "react-router-dom";
import { products_url } from "../../data";

import { db } from "../../firebase";
import { collection, getDocs } from "firebase/firestore";

export const getNotes = async () => {
  const notesSnapshot = await getDocs(collection(db, "products"));
  const notesList = notesSnapshot.docs.map((doc) => doc.data());
  return notesList;
};

const FeaturedProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const productsData = await getDocs(collection(db, "products"));
      setProducts(
        productsData.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }))
      );
      // console.log(productsData);
    };

    getData();
  }, []);
  return (
    <section className="wrap-around py-5">
      <div className="cent-container">
        <div className="title">
          <h2>Featured Homes!</h2>
          <div className="underline"></div>
        </div>
        <h3>Products</h3>
        {/* =============================================================================== */}
        {/* display products */}
        <main className="display-products">
          {products ? (
            <section>
              {products.map((product) => (
                <ul key={product.id}>
                  <li>{product.name}</li>
                  <li>{product.company}</li>
                  <li>{product.price}</li>
                  <li>{product.colors[1]}</li>
                  <li>{product.shipping}</li>
                  <li>{product.description}</li>
                  {/* <img src={product.image} alt={product.image} /> */}
                </ul>
              ))}
            </section>
          ) : (
            <Loading />
          )}
        </main>
        {/* end of display products */}
        <Error />
        <div className="Link">
          <Link to="#" className="btn">
            All featured homes
          </Link>
        </div>
      </div>
    </section>
  );
};
export default FeaturedProducts;
