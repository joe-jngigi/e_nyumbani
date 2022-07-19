import React from "react";
import { Link } from "react-router-dom";

export default function ProductsCard({ product }) {
  return (
    <Link to={`/product_details/${product.id}`}>
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
    </Link>
  );
}
