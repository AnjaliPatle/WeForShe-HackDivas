import React from 'react'
import io from "socket.io-client";
import './group-wishlist.css';
import WishlistItem from './WishlistItem';

export default function GroupWishlist(props) {
    {/*const [items,setItems]=React.useState([ {
    id: 1,
    src:
      "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/9162675/2019/12/3/672f1a3f-ceff-463f-8a1b-3642aaaaafdd1575363062219-HIGHLANDER-Men-White-Slim-Fit-Solid-Casual-Shirt-86115753630-4.jpg",
    brand: "HIGHLANDER",
    category: "Men Slim Fit Casual Shirt",
    color: "White",
    price: 2000,
  },
  {
    id: 2,
    src:
      "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/7488102/2019/8/22/b40e3089-2e16-4982-b6e9-9e5522d6725b1566454086712-Dennis-Lingo-Men-Pink-Slim-Fit-Solid-Casual-Shirt-9891566454-5.jpg",
    brand: "Dennis-Lingo",
    category: "Men Slim Fit Casual Shirt",
    color: "Pink",
    price: 3000,
  },
  {
    id: 3,
    src:
      "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/2042528/2017/9/28/11506599316846-Mast--Harbour-Men-Red--Blue-Regular-Fit-Checked-Casual-Shirt-7991506599316924-2.jpg",
    brand: "Mast&Harbour",
    category: "Regular Fit Checked Casual Shirt",
    color: "Blue",
    price: 1000,
  },
  {
    id: 4,
    src:
      "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/11178692/2020/9/21/5e2709ce-4e32-445d-a2e9-f9bdccc4280d1600663977621-HERENOW-Men-Shirts-9531600663975875-4.jpg",
    brand: "HERENOW",
    category: "Men Slim Fit Casual Shirt",
    color: "Black",
    price: 5000,
  }])*/}
    //const socket = React.useRef();

    // React.useEffect(() => {
    //     socket.current = io.connect("/");
         //    props.passSocket.on("got-wishlist", (data) => {
         //    console.log("got",data)
        //     setItems([...items,data]);
        // })
     //}, [])

    return (
        <div className="group-wishlist">
            <div className="group-wishlist-heading">Group Wishlist</div>
            <div style={{height:"40px"}}></div>
            {   
                props.items.length==0?
                    <div className="empty-wishlist">Wishlist is empty.</div>
                :
                    props.items.map((index)=>(
                        <WishlistItem data={props.items[0]}/>
                    ))
            }
        </div>
    )
}
