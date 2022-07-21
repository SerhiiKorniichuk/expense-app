import React, { useState, useEffect } from "react";
import {
  CustomInput,
  Form,
  Password,
  InputButton,
  CustomLink,
  CheckboxText,
} from "../styles";
import { Wrapper, CheckboxWrapper } from "./signUpStyles";
import Typography from "@mui/material/Typography";
import InputLabel from "@mui/material/InputLabel";
import Input from "@mui/material/Input";
import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";
import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Button from "@mui/material/Button";
import { Formik } from "formik";
import * as Yup from "yup";
import duckImage from "../../../assets/images/duck.png";
import { useNavigate } from "react-router-dom";

const SigninSchema = Yup.object().shape({
  fullName: Yup.string()
    .min(2, "Full name need contain at least 8 characters")
    .max(50, "Full name need contain not more then 50 characters")
    .required("Required"),
  userName: Yup.string()
    .min(2, "User name need contain at least 8 characters")
    .max(50, "User name need contain not more then 50 characters")
    .required("Required"),
  password: Yup.string()
    .min(8, "Password need contain at least 8 characters")
    .max(50, "Password need contain not more then 50 characters")
    .required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
});

interface SignUpProps {
  setImage?: any
};

const SignUp = ({ setImage } : SignUpProps) => {
  const [typeIsPassword, setTypeIsPassword] = useState<boolean>(true);
  const [agreeTermsOfUse, setAgreeTermsOfUse] = useState<boolean>(false);
  const navigate = useNavigate();

  useEffect(() => {
    setImage(duckImage);
  }, []);

  return (
    <Wrapper>
      <Typography variant="h1" align="center" className="header">
        Sign Up
      </Typography>
      <Formik
        initialValues={{
          fullName: "",
          userName: "",
          email: "",
          password: "",
        }}
        validationSchema={SigninSchema}
        onSubmit={(values) => {
          console.log(values);
          navigate("/auth/successful-registration");
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
        }) => (
          <Form
            component="form"
            onSubmit={(e) => {
              e.preventDefault();
              handleSubmit();
            }}
          >
            <CustomInput
              label={
                errors.fullName && touched.fullName
                  ? errors.fullName
                  : "Full Name"
              }
              value={values.fullName}
              name="fullName"
              onChange={handleChange}
              variant="standard"
              InputProps={{ disableUnderline: true }}
              autoComplete="off"
              error={!!(errors.fullName && touched.fullName)}
            />
            <CustomInput
              label={
                errors.userName && touched.userName
                  ? errors.userName
                  : "User Name"
              }
              value={values.userName}
              name="userName"
              onChange={handleChange}
              variant="standard"
              InputProps={{ disableUnderline: true }}
              autoComplete="off"
              error={!!(errors.userName && touched.userName)}
            />
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
            <Password
              variant="standard"
              className={errors.password && touched.password ? "error" : ""}
            >
              <InputLabel
                htmlFor="standard-adornment-password"
                className={errors.password && touched.password ? "error" : ""}
              >
                {errors.password && touched.password
                  ? errors.password
                  : "Password"}
              </InputLabel>
              <Input
                id="standard-adornment-password"
                value={values.password}
                name="password"
                onChange={handleChange}
                autoComplete="false"
                error={!!(errors.password && touched.password)}
                type={typeIsPassword ? "password" : "text"}
                endAdornment={
                  <InputButton
                    type="button"
                    onClick={(): void => setTypeIsPassword(!typeIsPassword)}
                  >
                    {typeIsPassword ? (
                      <VisibilityOffOutlinedIcon />
                    ) : (
                      <RemoveRedEyeOutlinedIcon />
                    )}
                  </InputButton>
                }
              />
            </Password>
            <CheckboxWrapper>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={agreeTermsOfUse}
                    onChange={() => setAgreeTermsOfUse(!agreeTermsOfUse)}
                  />
                }
                label={
                  <CheckboxText>
                    By creating an account you agree to the{" "}
                    <CustomLink to="/terms-of-use">terms of use</CustomLink>
                    terms of use and our{" "}
                    <CustomLink to="/privacy-policy">
                      privacy policy.
                    </CustomLink>
                  </CheckboxText>
                }
              />
            </CheckboxWrapper>

            <Button type="submit" variant="contained">
              Sign Up
            </Button>
          </Form>
        )}
      </Formik>
    </Wrapper>
  );
};

export default SignUp;
