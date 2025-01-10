import { useEffect, useState } from "react";
import ContentWraper from "../../components/ContentWraper";
import { useNavigate, useParams } from "react-router-dom";
import { Field, Form, Formik } from "formik";
import { Button } from "@mui/material";

interface Technician {
  id?: number;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
}

const EditTechnician = () => {
  const { technicianId, companyId } = useParams();
  const navigate = useNavigate();
  const [technician, setTechnician] = useState<Technician>();

  const getTechnician = async () => {
    try {
      const data = await fetch(`http://localhost:3000/companies/${companyId}`);
      const response = await data.json();
      const filtered = await response.technicians.filter((tech: any) => {
        return tech.id == technicianId;
      });

      setTechnician(filtered[0]);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getTechnician();
    210
  }, []);

  console.log(technician);

  const fieldStyle = {
    width: "600px",
    margin: "20px 10px",
    fontSize: "20px",
    padding: "10px",
    border: "1px solid gray",
    borderRadius: "5px",
  };

  return (
    <ContentWraper name="Edit Technician" onBack={() => navigate(-1)}>
      <Formik
        initialValues={{
          firstName: technician?.firstName,
          lastName: technician?.lastName,
          phone: technician?.phone,
          email: technician?.email,
        }}
        enableReinitialize
        onSubmit={async() => {

        }}
      >
        <Form
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-evenly",
            alignItems: "start",
          }}
        >
          <Field name="firstName" placeholder="First Name" style={fieldStyle} />
          <Field name="lastName" placeholder="Last Name" style={fieldStyle} />
          <Field name="phone" placeholder="Phone" style={fieldStyle} />
          <Field name="email" placeholder="Email" style={fieldStyle} />
          <Button
            type="submit"
            variant="contained"
            size="large"
            sx={{ width: "600px", margin: "20px 10px" }}
          >
            Save
          </Button>
        </Form>
      </Formik>
    </ContentWraper>
  );
};

export default EditTechnician;
