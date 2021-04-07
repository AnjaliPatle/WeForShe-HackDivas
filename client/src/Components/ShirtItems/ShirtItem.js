import React from "react";
import io from "socket.io-client";

const ShirtItem = (props) => {
    const socket = React.useRef();
    // React.useEffect(() => {
    //   socket.current = io.connect("/");
    // }, [])
    // const addToWishlist=()=>{
    //   socket.current.emit('add-wishlist', props.data)
    // }
  return (
    <>
      <ul className="shirt-products-container">
        {props.data.map((product, idx) => {
          return (
            <li className="product" key={`${product.src}${idx}`}>
              <div className="img-container">
                <img
                  className="product-img"
                  src={product.src}
                  alt="product"
                />
                <span
                  className="wishlist"
                   onClick={() => props.add(product)}
                >
                  Add to Wishlist
                </span>
              </div>

              <span
                className="product-brand"
              >
                {product.brand}{" "}
              </span>
              <span
                className="product-category"
              >
                {product.category}{" "}
              </span>
              <span
                className="product-price"
              >
                Rs.{product.price}
              </span>
            </li>
          );
        })}
      </ul>

     
    </>
  );
};

export default ShirtItem;
