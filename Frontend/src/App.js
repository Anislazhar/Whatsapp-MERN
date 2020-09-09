import React, { useEffect } from "react";

import Sidebar from "./components/Sidebar/Sidebar";
import Chat from "./components/Chat/Chat";
import "./App.css";

function App() {
  useEffect(() => {
    const pusher = new Pusher("061d18569473acb8c674", {
      cluster: "eu",
    });

    const channel = pusher.subscribe("messages");
    channel.bind("inserted", (data) => {
      alert(JSON.stringify(data));
    });
  }, []);
  return (
    <div className="app">
      <div className="app__body">
        <Sidebar />
        <Chat />
      </div>
    </div>
  );
}

export default App;
