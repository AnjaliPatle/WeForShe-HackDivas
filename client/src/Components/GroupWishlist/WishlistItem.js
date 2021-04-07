import React from 'react'
import './group-wishlist.css'

export default function WishlistItem(props) {
    return (
        <div className="wishlist-item">
            <img src={props.data.src}/>
            <div className="wishlist-item-data">
                <span className="product-brand">
                    {props.data.brand}{" "}
                </span>
                <br/>
                <span className="product-category">
                    {props.data.category}{" "}
                </span>
                <br/>
                <span className="product-price">
                    Rs.{props.data.price}
                </span>
            </div>
                
            <div style={{textAlign:"center"}}>
                <div style={{fontSize:"1.75rem",fontWeight:"600"}}>+</div>
                <div style={{fontSize:"0.75rem"}}>Add To Your Cart</div>
            </div>
        </div>
    )
}
