import { configureStore } from '@reduxjs/toolkit';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './App';
import userSlice from './redux/user';
import sidebarSlice from './redux/sidebar';
import postSlice from './redux/page'

const root = ReactDOM.createRoot(document.getElementById('root'));

const store = configureStore({
  reducer: {
    user: userSlice,
    sidebar: sidebarSlice,
    posts: postSlice
  }
})

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

