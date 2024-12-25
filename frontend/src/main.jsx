import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { StrictMode } from 'react';
import App from './App';
import UserContext from './context/UserContext';
import CaptainContext from './context/CaptainContext';
import SocketProvider from './context/SocketContext';
import './index.css';

const rootElement = document.getElementById('root');

if (!rootElement) {
  throw new Error('Failed to find the root element');
}

const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <BrowserRouter>
      <CaptainContext>
        <UserContext>
          <SocketProvider>
            <App />
          </SocketProvider>
        </UserContext>
      </CaptainContext>
    </BrowserRouter>
  </StrictMode>
);