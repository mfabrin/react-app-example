import { ThemeProvider } from "@mui/material";
import AuthProvider from "@services/Authentication";
import { SnackbarProvider } from "notistack";
import { BrowserRouter } from "react-router-dom";
import theme from "./assets";
import { MyRoutes } from "./components";

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
