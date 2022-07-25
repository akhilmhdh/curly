import { BrowserRouter } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';

import { Router } from './routes';

import './App.css';

const App = () => (
  <BrowserRouter>
    <ChakraProvider>
      <Router />
    </ChakraProvider>
  </BrowserRouter>
);

export default App;
