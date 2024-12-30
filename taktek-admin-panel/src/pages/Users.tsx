import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { useEffect, useState } from "react";
import ContentWraper from "../components/ContentWraper";
import { useNavigate } from "react-router-dom";
import { Box } from "@mui/material";

const Users = () => {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  const getUsers = async () => {
    try {
      const data = await fetch("http://localhost:3000/users");
      const result = await data.json();
      setUsers(result);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getUsers();
  }, []);

  const columns: GridColDef[] = [
    { field: "id", headerName: "ID", flex: 0.5 },
    { field: "name", headerName: "Name", flex: 1 },
    { field: "email", headerName: "Email", flex: 1 },
    { field: "phone", headerName: "Phone", flex: 1 },
  ];

  const rows = users;
  const paginationModel = { page: 0, pageSize: 5 };

  return (
    <ContentWraper
      name="Users"
      buttonName="Create User"
      onBack={() => navigate(-1)}
      buttonFunction={() => navigate("/users/create")}
    >
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{ pagination: { paginationModel } }}
        pageSizeOptions={[5, 10]}
      />
    </ContentWraper>
  );
};

export default Users;
