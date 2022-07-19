import { useState, useEffect } from "react";
import { db } from "../firebase";
import { doc, getDoc, collection, getDocs } from "firebase/firestore";
import { useParams } from "react-router-dom";

export default function ProductDetails() {
  const [product, setProduct] = useState([]);
  // read todo id from react-router params
  let { id } = useParams();

  useEffect(() => {
    const getData = async () => {
      const docRef = await doc(db, "products", `${id}`);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        setProduct(docSnap.data());
        console.log("Document data:", docSnap.data());
      } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
      }
    };

    getData();
  }, []);
  return (
    <section class="card m-2">
      <img class="card-img-top" src={product.image && product.image} />
      <div class="card-body">
        <h5 class="card-title">Name: {product.name && product.name}</h5>
        <p class="card-text">Price: {product.price && product.price}</p>
        <p class="card-text">
          Desc:{product.description && product.description}
        </p>
      </div>
    </section>
  );
}
