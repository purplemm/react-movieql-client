import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import client from './apollo/client';
import { ApolloProvider } from "@apollo/client";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* Provider는 기본적으로 애플리케이션 전역에서 client에 접근 가능하도록 함 */}
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </React.StrictMode>
);
