import { createTheme } from '@mui/material';

const theme = createTheme({
    palette: {
        primary: {
            main: 'rgb(188, 121, 148)',
        },
        secondary: {
            main: 'rgb(125, 100, 110)',
        },
    },
    components: {
        MuiToggleButton: {
            styleOverrides: {
                root: {
                    textAlign: 'right',
                    display: 'flex',
                    justifyContent: 'space-between',
                },
            },
        },
        MuiBox: {
            styleOverrides: {
                root: {
                    padding: '2%',
                },
            },
        },
    },
});

export default theme;
