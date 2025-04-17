import { createTheme } from "@mui/material";

export const MAIN_THEME = createTheme({
  typography: {
    fontFamily: ["Roboto", "sans-serif"].join(","),
    htmlFontSize: 10,
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          background:
            "linear-gradient(45deg,rgb(199, 215, 228) 30%,rgb(141, 232, 181) 90%)",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed",
        },
      },
    },
  },
});
