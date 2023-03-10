import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { ScrollToTop } from './componentes';
import { hydrate } from 'react-dom';

const Root = (
  <BrowserRouter>
  <HelmetProvider>
    <ScrollToTop />
    <App />
    </HelmetProvider>
  </BrowserRouter>
);
const root = document.getElementById('root');
if (root.hasChildNodes()){
  hydrate(Root,root);
}else{
  ReactDOM.createRoot(root).render(Root);
}


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
