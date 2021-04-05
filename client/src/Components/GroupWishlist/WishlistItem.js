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
                
            <div>
            </div>
        </div>
    )
}
