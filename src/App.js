import React from 'react';
import './scss/App.scss';
import { Server } from 'miragejs';
import Routes from './routes';

let server = {};
if (process.env.REACT_APP_API_ENV === "mock") {
  import("./mock-backend/Server")
    .then(res => server = res)
}

function App() {
  if (process.env.REACT_APP_API_ENV === "mock") {
    new Server(server);
  }
  return (
    <div className="App">
      <Routes />
    </div>
  );
}

export default App;
