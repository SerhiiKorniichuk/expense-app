import React, { useEffect } from "react";
import { CustomInput, Form } from "../styles";
import { Wrapper } from "./resetPasswordStep1Styles";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Formik } from "formik";
import * as Yup from "yup";
import leptop from "../../../assets/images/leptop.png";
import { useNavigate } from "react-router-dom";

interface SignUpProps {
  setImage?: any;
}

const SigninSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Required"),
});

const ResetPasswordStep1 = ({ setImage }: SignUpProps) => {
  const navigate = useNavigate();

  useEffect(() => {
    setImage(leptop);
  }, []);

  return (
    <Wrapper>
      <Typography variant="h1" align="center" className="header">
        Reset <br /> password
      </Typography>
      <Typography variant="h2" align="center" className="description">
        Enter your email and we will send you
        <br />
        an email with simple steps to reset your
        <br />
        password and reset it
      </Typography>
      <Formik
        initialValues={{
          email: "",
        }}
        validationSchema={SigninSchema}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {({ values, errors, touched, handleChange, handleSubmit }) => (
          <Form
            component="form"
            onSubmit={(e) => {
              e.preventDefault();
              navigate("/auth/reset-password-step-2");
            }}
          >
            <CustomInput
              label={
                errors.email && touched.email ? errors.email : "Email Address"
              }
              value={values.email}
              name="email"
              onChange={handleChange}
              variant="standard"
              InputProps={{ disableUnderline: true }}
              autoComplete="off"
              error={!!(errors.email && touched.email)}
            />
            <Button type="submit" variant="contained">
              Reset Password
            </Button>
          </Form>
        )}
      </Formik>
    </Wrapper>
  );
};

export default ResetPasswordStep1;
