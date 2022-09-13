import { ThemeProvider } from '@mui/material';
import { BrowserRouter } from 'react-router-dom';
import { SnackbarProvider } from 'notistack'

import theme from 'assets';
import { MyRoutes } from 'components';
import { AuthProvider } from 'services';


function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <SnackbarProvider>
          <AuthProvider>
            <MyRoutes />
          </AuthProvider>
        </SnackbarProvider>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
