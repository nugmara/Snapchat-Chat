import io from "socket.io-client";
import { useState, useEffect } from "react";

const socket = io("/");

const Chat = () => {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessages([...messages, message]);
    socket.emit("message", message);
  };

  useEffect(() => {
    socket.on("message", receiveMessage);

    return () => {
      socket.off("message", receiveMessage);
    };
  }, []);

  const receiveMessage = (message) =>
    setMessages((state) => [...state, message]);
  return (
    <div>
      <div>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Write your message..."
            onChange={(e) => setMessage(e.target.value)}
          />
          <button>Send</button>
        </form>
        <ul>
          {messages.map((message, i) => (
            <li key={i}>{message}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Chat;

// import io from "socket.io-client";
// import { useState, useEffect } from "react";

// const socket = io("/");
// function Chat() {
//     const [message, setMessage] = useState("");
//   const [messages, setMessages] = useState([]);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setMessages([...messages, message]);
//     socket.emit("message", message);
//   };

//   useEffect(() => {
//     socket.on("message", receiveMessage);

//     return () => {
//       socket.off("message", receiveMessage);
//     };
//   }, []);

//   const receiveMessage = (message) =>
//     setMessages((state) => [...state, message]);
//   return (
//     <div>
//          <div>
//       <form onSubmit={handleSubmit}>
//         <input
//           type="text"
//           placeholder="Write your message..."
//           onChange={(e) => setMessage(e.target.value)}
//         />
//         <button>Send</button>
//       </form>
//       <ul>
//         {messages.map((message, i) => (
//           <li key={i}>{message}</li>
//         ))}
//       </ul>
//     </div>
//     </div>
//   )
// }

// export default Chat
