import { ThemeProvider } from '@mui/material';
import { BrowserRouter } from 'react-router-dom';

import theme from 'assets'
import { MyRoutes } from 'components';


function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <MyRoutes />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
