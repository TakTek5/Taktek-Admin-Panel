import { Box, Button } from "@mui/material";

const Login = () => {
  return (
    <Box
      sx={{
        display: "flex",
        height: "100dvh",
        backgroundColor: "#ffffff",
      }}
    >
      <Box sx={{ display: "flex", flexDirection: "column", margin: "auto" }}>
        <Box sx={{ height: "90px", width: "350px", marginBottom: "50px" }}>
          <img
            src="https://firebasestorage.googleapis.com/v0/b/sds-main-29a46.firebasestorage.app/o/images%2Flogo.png?alt=media&token=6defccae-3a0c-4333-80a8-1c1ef024c917"
            alt="logo"
            height="100%"
            width="100%"
          />
        </Box>
        <Button
          variant="contained"
          sx={{
            backgroundColor: "#88c124",
            color: "#000",
            fontSize: "20px",
          }}
        >
          Get Started
        </Button>
      </Box>
    </Box>
  );
};

export default Login;
