import { Routes, Route } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { Box } from "@mui/material";

import Destinations from "./pages/Destinations";
import TripTypes from "./pages/TripTypes";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Footer from "./pages/Footer";
import Navbar from "./components/Navbar";

const theme = createTheme({
  palette: {
    primary: {
      main: "#ffab91",
      light: "",
      dark: "",
      contrastText: "#fff",
    },
    secondary: {
      main: "#1976d2",
      light: "#42a5f5",
      dark: "#1565c0",
      contrastText: "#fff",
    },
    background: {},
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Navbar />
      <Box sx={{ mt: 2 }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/destinations" element={<Destinations />} />
          <Route path="/trip-types" element={<TripTypes />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </Box>
    </ThemeProvider>
  );
}

export default App;
