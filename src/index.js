import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faFile } from '@fortawesome/free-solid-svg-icons'

library.add(fab, faFile)


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);
