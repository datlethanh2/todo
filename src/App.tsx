import React from 'react';
import RoutePage from './route/RoutePage'
import { BrowserRouter } from 'react-router-dom';
import {StoreProvider}  from "./store"
import { GoogleOAuthProvider } from '@react-oauth/google';
import { ThemeProvider } from '@mui/material/styles';
import {theme} from "./component/createTheme"


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        < GoogleOAuthProvider clientId="58205235959-8j4poukmjlfc6qahp0ameav09k5pah5d.apps.googleusercontent.com">
          <StoreProvider>
            <ThemeProvider theme={theme}>
              <RoutePage/>
            </ThemeProvider>
          </StoreProvider>
        </GoogleOAuthProvider>
       </BrowserRouter>
    </div>
  );
}

export default App;