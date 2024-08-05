// import { createTheme } from '@mui/material/styles';
import { grey } from "@mui/material/colors";

// export const theme = createTheme({
//     palette: {
//         primary: {
//             main: blue[500]
//         },
//         secondary: {
//             main: lightBlue[800],
//             midNightBlue: "#003366"
//         }
//     }
// });

export const themeColors = (mode) => ({
  palette: {
    mode,
    ...(mode === "light"
      ? {
          primary: {
            main: "#1ad5ff", // Calming blue
            white: "#fff",
          },
          secondary: {
            main: "#427767", // Slightly darker blue
            midNightBlue: "#1ad5ff",
          },
          background: {
            default: "#f5f5f5", // Light gray
          },
          text: {
            primary: "#333333", // Dark gray
            secondary: grey[500],
          },
        }
      : {
          primary: {
            main: "#000000", // Midnight blue
            white: "#002549",
          },
          secondary: {
            main: "#b4c1fd", // Vibrant blue
            midNightBlue: "#000000",
          },
          background: {
            default: "#1e1e1e", // Dark gray or black
          },
          text: {
            primary: "#ffffff", // White or light gray
            secondary: grey[500],
          },
        }),
  },
});
