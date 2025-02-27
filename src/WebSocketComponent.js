import { useEffect, useState } from "react";
import { io } from "socket.io-client";

const socket = io("http://10.3.101.179:4001");

function WebSocketComponent() {
  const [messages, setMessages] = useState(null);

  useEffect(() => {
    socket.on("message", (data) => {
      setMessages(data.data);
    });

    return () => socket.disconnect();
  }, []);

  return (
    <div>
      <h2>WebSocket Messages</h2>
      <ul>{messages}</ul>
    </div>
  );
}

export default WebSocketComponent;
