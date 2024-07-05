import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/global.css';
import App from './App.jsx';
import { PlayersContextProvider } from './contexts/PlayerContext.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <PlayersContextProvider>
      <App />
    </PlayersContextProvider>
  </React.StrictMode>,
)
