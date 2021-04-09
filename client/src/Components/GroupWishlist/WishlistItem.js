import React from 'react'
import './group-wishlist.css'

export default function WishlistItem(props) {
    return (
        <div className="wishlist-item">
            <div className="wishlist-item-inner">
                <img src={props.data.data.src}/>
                <div className="wishlist-item-data">
                    <span className="product-brand">
                        {props.data.data.brand}{" "}
                    </span>
                    <br/>
                    <span className="product-category">
                        {props.data.data.category}{" "}
                    </span>
                    <br/>
                    <span className="product-price">
                        Rs.{props.data.data.price}
                    </span>
                </div>
                    
                <div style={{textAlign:"center"}}>
                    <div style={{fontSize:"1.75rem",fontWeight:"600"}}>+</div>
                    <div style={{fontSize:"0.75rem"}}>Add To Your Cart</div>
                </div>
                <br/>
            </div>
            <div className="wishlist-item-added">Added by {props.data.from}</div>
        </div>
    )
}
