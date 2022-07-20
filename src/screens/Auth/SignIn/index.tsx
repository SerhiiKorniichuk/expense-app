import React, { useState } from "react";
import {
  Wrapper,
  CustomInput,
  Form,
  Password,
  InputButton,
  SpaceBetweenWrapper,
  CustomLink,
  JustifyCenterWrapper,
} from "./styles";
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

const SigninSchema = Yup.object().shape({
  password: Yup.string()
    .min(2, "Password need contain at least 8 characters")
    .max(50, "Password need contain not more then 50 characters")
    .required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
});

const SignIn = () => {
  const [typeIsPassword, setTypeIsPassword] = useState<boolean>(true);
  const [rememberMe, setRememberMe] = useState<boolean>(false);

  return (
    <Wrapper>
      <Typography variant="h1" align="center">
        Sign In
      </Typography>
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        validationSchema={SigninSchema}
        onSubmit={(values) => {
          console.log(values);
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
              id="standard-required"
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
            <SpaceBetweenWrapper>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={rememberMe}
                    onChange={() => setRememberMe(!rememberMe)}
                  />
                }
                label="Remember me"
              />
              <CustomLink to="/reset-password">Reset Password?</CustomLink>
            </SpaceBetweenWrapper>
            <Button type="submit" variant="contained">
              Login
            </Button>
            <JustifyCenterWrapper>
              <Typography variant="h2" align="center">
                Don’t have account yet?
              </Typography>
              <CustomLink to="/sign-up">New Account</CustomLink>
            </JustifyCenterWrapper>
          </Form>
        )}
      </Formik>
    </Wrapper>
  );
};

export default SignIn;
