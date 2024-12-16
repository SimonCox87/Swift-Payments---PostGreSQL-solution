// imports the io function from the socket.io-client library.
// io function is used to establish a connection with a Socket.IO server
import { io } from "socket.io-client";

// dynamically set the WebSocket URL based on the environment, i.e. whether the
// app is being deployed locally or via a docker
const socket = io(process.env.REACT_APP_SOCKET_URL, {
    transports: ['websocket'], // Ensure WebSocket is used
  });

// exports the socket instance
export default socket;