import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { QueryClient, QueryClientProvider } from 'react-query'
import './index.css';
import App from './App';
import store from './store';

const queryClient = new QueryClient();

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
