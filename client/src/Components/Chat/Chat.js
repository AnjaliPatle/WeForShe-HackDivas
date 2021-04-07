import React from "react";
import './Chat.css'

const Chat = (props) => {
    var input = document.getElementById('input');
 return (
      <>
         {   
                props.messages.length==0?
                    <div className="empty-wishlist">You can start your chat!</div>
                :
                    props.messages.map((index)=>(
                        <li>{index}</li>
                    ))
            }
          <form id="form" action="">
            <input id="input" autocomplete="off" /><button onClick={() => props.add(input.value)}>Send</button>
          </form>
      </>
  )
  }

  export default Chat
