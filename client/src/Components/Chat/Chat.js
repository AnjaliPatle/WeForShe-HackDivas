import React from "react";
import './Chat.css'

const Chat = (props) => {
    const [message,setMessage]=React.useState("")
    const sendMessage=()=>{
        props.add(message)
        setMessage("");
    }
 return (
      <div className="chat-box">
        <div className="messages-section">
         {   
                props.messages.length==0?
                    <div className="empty-wishlist">You can start your chat!</div>
                :
                    props.messages.map((msg,index)=>(
                        <div className={msg.from==props.username?"from-user-container":"to-user-container"}>
                            <li className={msg.from==props.username?"from-user":"to-user"}>
                                {msg.from!=props.username?<div className="chat-username">{msg.from}</div>:null}
                                {msg.data}
                            </li>
                        </div>
                    ))
            }
        </div>
        <div className="chat-input-section">
            <input className="chat-box-input" placeholder="Enter message" onChange={(e)=>setMessage(e.target.value)} value={message}/>
            <button className="send-message" onClick={sendMessage}>Send</button>
        </div>
      </div>
  )
  }

  export default Chat
