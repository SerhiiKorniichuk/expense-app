import React, { useEffect, useState } from "react";
import { Password, Form, InputButton } from "../styles";
import { Wrapper } from "./resetPasswordStep2Styles";
import InputLabel from "@mui/material/InputLabel";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Formik } from "formik";
import * as Yup from "yup";
import leptop from "../../../assets/images/leptop.png";
import Input from "@mui/material/Input";
import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";
import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";
import { useNavigate } from "react-router-dom";

interface SignUpProps {
  setImage?: any;
}

const SigninSchema = Yup.object().shape({
  password: Yup.string()
    .min(8, "Password need contain at least 8 characters")
    .max(50, "Password need contain not more then 50 characters")
    .required("Required"),
  repeatPassword: Yup.string()
    .min(8, "Password need contain at least 8 characters")
    .max(50, "Password need contain not more then 50 characters")
    .oneOf([Yup.ref('password'), null], 'Passwords must match')
    .required("Required"),
});

const ResetPasswordStep2 = ({ setImage }: SignUpProps) => {
  const [typeIsPassword, setTypeIsPassword] = useState<boolean>(true);
  const [repeatTypeIsPassword, setRepeatTypeIsPassword] =
    useState<boolean>(true);
  const navigate = useNavigate();

  useEffect(() => {
    setImage(leptop);
  }, []);

  return (
    <Wrapper>
      <Typography variant="h1" align="center" className="header">
        Reset <br /> password
      </Typography>
      <Formik
        initialValues={{
          password: "",
          repeatPassword: "",
        }}
        validationSchema={SigninSchema}
        onSubmit={(values) => {
          console.log(values);
          navigate("/auth/reset-password-step-3");
        }}
      >
        {({ values, errors, touched, handleChange, handleSubmit }) => (
          <Form
            component="form"
            onSubmit={(e) => {
              e.preventDefault();
              handleSubmit();
            }}
          >
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
                  : "Enter New Password"}
              </InputLabel>
              <Input
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

            <Password
              variant="standard"
              className={
                errors.repeatPassword && touched.repeatPassword ? "error" : ""
              }
            >
              <InputLabel
                htmlFor="standard-adornment-password"
                className={
                  errors.repeatPassword && touched.repeatPassword ? "error" : ""
                }
              >
                {errors.repeatPassword && touched.repeatPassword
                  ? errors.repeatPassword
                  : "Repeat New Password"}
              </InputLabel>
              <Input
                value={values.repeatPassword}
                name="repeatPassword"
                onChange={handleChange}
                autoComplete="false"
                error={!!(errors.repeatPassword && touched.repeatPassword)}
                type={repeatTypeIsPassword ? "password" : "text"}
                endAdornment={
                  <InputButton
                    type="button"
                    onClick={(): void =>
                      setRepeatTypeIsPassword(!repeatTypeIsPassword)
                    }
                  >
                    {repeatTypeIsPassword ? (
                      <VisibilityOffOutlinedIcon />
                    ) : (
                      <RemoveRedEyeOutlinedIcon />
                    )}
                  </InputButton>
                }
              />
            </Password>
            <Button type="submit" variant="contained">
              Reset Password
            </Button>
          </Form>
        )}
      </Formik>
    </Wrapper>
  );
};

export default ResetPasswordStep2;
