import { Box, Paper } from '@mui/material';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import React, { useEffect, useState } from 'react'

const Services = () => {
    const [services, setServices] = useState([]);
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
        const paginationModel = { page: 0, pageSize: 5 };
  return (
    <Box>
      <Paper elevation={3} sx={{ padding: 20 }}>
        <DataGrid
          rows={rows}
          columns={columns}
          sx={{ width: 1000 }}
          initialState={{ pagination: { paginationModel } }}
          pageSizeOptions={[5, 10]}
        />
      </Paper>
    </Box>
  )
}

export default Services