import React from 'react';
import ReactDOM from 'react-dom/client';
import {ThemeProvider} from './components/settings_folder/ThemeContext.jsx';
import App from './components/App.jsx';
import {BrowserRouter} from 'react-router-dom';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

    <BrowserRouter>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </BrowserRouter>


);


