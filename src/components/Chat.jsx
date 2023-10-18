import { io } from "../../socketio";

export default function Chat() {
  const socket = io();

 function handleSubmit(e) {
    e.preventDefault()
    
    if(input.value) {
        socket.emit("chat message", input.value)
        input.value = "";
    }
  }

  return (
    <div>
      <section id="chat">
        <ul id="messages"></ul>
        <form id="form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="message"
            id="input"
            placeholder="Type a message"
            autoComplete="off"
          />
          <button type="submit">Enviar</button>
        </form>
      </section>
    </div>
  );
}
