import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { useEffect, useState } from "react";
import ContentWraper from "../components/ContentWraper";
import { useNavigate } from "react-router-dom";

const Services = () => {
  const [services, setServices] = useState([]);
  const navigate = useNavigate();
  const getUsers = async () => {
    try {
      const data = await fetch("http://localhost:3000/services");
      const result = await data.json();
      setServices(result);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getUsers();
  }, []);

  const columns: GridColDef[] = [
    { field: "id", headerName: "ID", flex: 0.5 },
    { field: "serviceName", headerName: "Service Name", flex: 1 },
  ];

  const rows = services;
  const paginationModel = { page: 0, pageSize: 10 };
  return (
    <ContentWraper
      name="Services"
      buttonName="Create Service"
      buttonFunction={() => navigate("/services/create")}
      onBack={() => navigate(-1)}
    >
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{ pagination: { paginationModel } }}
        pageSizeOptions={[10, 20]}
      />
    </ContentWraper>
  );
};

export default Services;
