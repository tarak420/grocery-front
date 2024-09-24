import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './App.jsx';
import store from './redux/store'; // Import your store
import './index.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}> {/* Wrap your App in Provider */}
      <App />
    </Provider>
  </StrictMode>,
);
