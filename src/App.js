import './App.scss';
import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import { ThemeProvider, StyledEngineProvider } from '@mui/material/styles';
import { appTheme } from './container/material.theme/app.theme/app.material.theme';
import CssBaseline from '@mui/material/CssBaseline';
import AppNavbar from '../src/components/common/app.navbar/app.navbar';
import HomePage from './container/home.page/home.page';
import CreateTokenPage from './container/create.token.page/create.token.page';
import FooterV2 from './components/common/footer.v2/footer.v2';

function App() {

  return (
    <div>
      <StyledEngineProvider injectFirst>
        <ThemeProvider theme={appTheme}>
          <CssBaseline />
          <Router>
            <div>
              <AppNavbar />
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/create-token" element={<CreateTokenPage />} />
              </Routes>
              <FooterV2 />
            </div>
          </Router >
        </ThemeProvider>
      </StyledEngineProvider>
    </div>

  );
}

export default App;
