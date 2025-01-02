import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import PersistentDrawer from "./components/PersistentDrawer";
import Users from "./pages/Users";
import ServiceProviders from "./pages/ServiceProviders";
import Services from "./pages/Services";
import { Box } from "@mui/material";
import EditUsers from "./pages/Edit/EditUsers";
import CreateUser from "./pages/Create/CreateUser";

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
          <Route path="/users/create" element={<CreateUser />} />
          <Route path="/users/:id" element={<EditUsers />} />
          <Route path="/services" element={<Services />} />
          <Route path="/companies" element={<ServiceProviders />} />
        </Routes>
      </Box>
    </Box>
  );
}

export default App;
