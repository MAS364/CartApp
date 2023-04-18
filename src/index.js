import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import firebase from 'firebase/app';
import 'firebase/firestore';

import { initializeApp } from 'firebase/app';


// const firebaseConfig = {
//   apiKey: "AIzaSyCSxC2xzdVkR0zlGZzZKyKp0ebxejO0sd8",
//   authDomain: "cart-cdbb1.firebaseapp.com",
//   projectId: "cart-cdbb1",
//   storageBucket: "cart-cdbb1.appspot.com",
//   messagingSenderId: "804138910807",
//   appId: "1:804138910807:web:c10e348b71f9a6bdea8f12"
// };



const firebaseConfig = {
  apiKey: "AIzaSyArL47LzD-oRCg8g9o8EO3xaN1bb68CWrk",
  authDomain: "box-cart-20b15.firebaseapp.com",
  projectId: "box-cart-20b15",
  storageBucket: "box-cart-20b15.appspot.com",
  messagingSenderId: "68891610804",
  appId: "1:68891610804:web:59a9b488469fa0cf6fd1e1"
};
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

//ReactDOM.render(<App />, document.getElementById('root'));



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


