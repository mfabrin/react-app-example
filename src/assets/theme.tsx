import { createTheme } from "@mui/material";

const theme = createTheme({
    spacing: 8,
    components: {
        MuiGrid: {
            defaultProps: {
                spacing: 2
            }
        }
    }
});

export default theme;