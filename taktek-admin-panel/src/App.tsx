import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import PersistentDrawer from "./components/PersistentDrawer";
import Users from "./pages/Users";
import Services from "./pages/Services";
import { Box } from "@mui/material";
import EditUsers from "./pages/Edit/EditUsers";
import CreateUser from "./pages/Create/CreateUser";
import EditServices from "./pages/Edit/EditServices";
import { ToastContainer } from "react-toastify";
import CreateService from "./pages/Create/CreateService";
import Companies from "./pages/Companies";
import EditCompany from "./pages/Edit/EditCompany";
import EditTechnician from "./pages/Edit/EditTechnician";

function App() {
  const drawerWidth = 240;

  return (
    <>
      <Box>
        <ToastContainer />
        <PersistentDrawer />
        <Box
          sx={{
            width: `calc(100% - ${drawerWidth}px)`,
            margin: "auto",
            minHeight: "100vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/users" element={<Users />} />
            <Route path="/users/create" element={<CreateUser />} />
            <Route path="/users/:id" element={<EditUsers />} />
            <Route path="/services" element={<Services />} />
            <Route path="/services/create" element={<CreateService />} />
            <Route path="/services/:id" element={<EditServices />} />
            <Route path="/companies" element={<Companies />} />
            <Route
              path="/companies/:companyId/technicians/:technicianId"
              element={<EditTechnician />}
            />
            <Route path="/companies/:id" element={<EditCompany />} />
          </Routes>
        </Box>
      </Box>
    </>
  );
}

export default App;
