import React from 'react';
import { render } from 'react-dom'; // Import 'render' from 'react-dom'
import { ChakraProvider } from '@chakra-ui/react';
import App from './App.jsx';
import './index.css';

// Use 'render' instead of 'createRoot' and 'render'
render(
  <React.StrictMode>
    <ChakraProvider>
      <App />
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
