import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Hero from "./components/Hero";
import Footer from "./components/Footer";

const theme = createTheme({
  palette: {
    background: {
      default: "#f5f5f5",
    },
    primary: {
      main: "#be2239",
    },
  },
});

export default function MarketingPage() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />

        <Hero />
        <Footer />
      </ThemeProvider>
    </>
  );
}
