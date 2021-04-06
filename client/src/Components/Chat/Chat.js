import React from "react";
import './Chat.css'

const Chat = (props) => {

 return (
      <>
         {   
                props.messages.length==0?
                    <div className="empty-wishlist">Wishlist is empty.</div>
                :
                    props.messages.map((index)=>(
                        <li>{index}</li>
                    ))
            }
          <form id="form" action="">
            <input id="input" autocomplete="off" /><button>Send</button>
          </form>
      </>
  )
  }

  export default Chat
