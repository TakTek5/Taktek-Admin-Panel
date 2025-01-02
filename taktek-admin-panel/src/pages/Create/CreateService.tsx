import { useState } from "react";
import ContentWraper from "../../components/ContentWraper";
import { Field, Form, Formik } from "formik";
import { useNavigate } from "react-router-dom";
import { Box, Button, CircularProgress } from "@mui/material";
import { Flip, toast } from "react-toastify";

const CreateService = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const succesNotify = () =>
    toast.success("Service Created", {
      autoClose: 2000,
      position: "bottom-right",
      theme: "colored",
      transition: Flip,
    });
  const errorNotify = () =>
    toast.error("Failed To Create The Service", {
      autoClose: 2000,
      position: "bottom-right",
      theme: "colored",
      transition: Flip,
    });

  const fieldStyle = {
    width: "500px",
    margin: "20px 10px",
    fontSize: "20px",
    padding: "10px",
    border: "1px solid gray",
    borderRadius: "5px",
  };

  return (
    <ContentWraper name="Create Service" onBack={() => navigate(-1)}>
      <Formik
        initialValues={{
          serviceName: "",
        }}
        enableReinitialize
        onSubmit={async (values, { setSubmitting }) => {
          setLoading(true);
          setSubmitting(true);
          const data = await fetch(`http://localhost:3000/services`, {
            method: "POST",
            body: JSON.stringify(values),
            headers: { "Content-Type": "application/json" },
          });
          if (data.status === 200 || 201) {
            succesNotify();
            setSubmitting(false);
            setTimeout(() => {
              setLoading(false);
              navigate(-1);
            }, 1000);
          } else {
            errorNotify();
            setTimeout(() => {
              setLoading(false);
            }, 1000);
          }
        }}
      >
        {loading ? (
          <Box sx={{ display: "flex", height: "300px" }}>
            <CircularProgress sx={{ margin: "auto" }} />
          </Box>
        ) : (
          <Form
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "space-evenly",
              alignItems: "center",
            }}
          >
            <Field
              name="serviceName"
              style={fieldStyle}
              placeholder="Service Name"
            />
            <Button
              variant="contained"
              type="submit"
              size="large"
              sx={{ width: "400px", margin: "20px" }}
            >
              Create
            </Button>
          </Form>
        )}
      </Formik>
    </ContentWraper>
  );
};

export default CreateService;
