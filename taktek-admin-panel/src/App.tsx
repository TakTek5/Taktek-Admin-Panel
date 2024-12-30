import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import PersistentDrawer from "./components/PersistentDrawer";
import Users from "./pages/Users";
import ServiceProviders from "./pages/ServiceProviders";
import Services from "./pages/Services";
import { Box } from "@mui/material";

function App() {
  const drawerWidth = 240;
  return (
    <Box>
      <PersistentDrawer />
      <Box
        sx={{
          width: `calc(100% - ${drawerWidth}px)`,
          // marginLeft: `-${drawerWidth}px`,
          margin:"auto",
          minHeight:"100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/users" element={<Users />} />
          <Route path="/services" element={<Services />} />
          <Route path="/service-providers" element={<ServiceProviders />} />
        </Routes>
      </Box>
    </Box>
  );
}

export default App;
