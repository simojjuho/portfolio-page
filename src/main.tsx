import React from 'react'
import ReactDOM from 'react-dom/client'
import { ApolloProvider } from '@apollo/client'
import { Provider } from 'react-redux'

import client from './shared/queries/queryClient.ts'
import App from './App.tsx'
import store from './redux/store.ts'


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ApolloProvider client={client}>
        <Provider store={store}>
          <App />
        </Provider>
    </ApolloProvider>
  </React.StrictMode>,
)
