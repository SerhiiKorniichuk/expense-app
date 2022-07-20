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

const SignIn = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [errorEmail, setErrorEmail] = useState<string>("");
  const [errorPassword, setErrorPassword] = useState<string>("");
  const [typeIsPassword, setTypeIsPassword] = useState<boolean>(true);
  const [rememberMe, setRememberMe] = useState<boolean>(false);

  const handleSubmit = (e: any): void => {
    e.preventDefault();

    if (!email) {
      setErrorEmail("Required");
      return undefined;
    }

    if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email)) {
      setErrorEmail("Invalid email");
      return undefined;
    }

    if (!password) {
      setErrorPassword("Required");
      return undefined;
    }
  };

  console.log(errorPassword)


  return (
    <Wrapper>
      <Typography variant="h1" align="center">
        Sign In
      </Typography>
      <Form component="form" onSubmit={(e): void => handleSubmit(e)}>
        <CustomInput
          id="standard-required"
          label={errorEmail || "Email Address"}
          value={email}
          onChange={(e): void => {
            setEmail(e.target.value);
            setErrorEmail("");
          }}
          variant="standard"
          InputProps={{ disableUnderline: true }}
          autoComplete="off"
          error={!!errorEmail}
        />
        <Password variant="standard" className={errorPassword ? "error" : ""}>
          <InputLabel htmlFor="standard-adornment-password" className={errorPassword ? "error" : ""}>
            Password
          </InputLabel>
          <Input
            id="standard-adornment-password"
            value={password}
            onChange={(e): void => {
              setPassword(e.target.value);
              setErrorPassword("");
            }}
            autoComplete="false"
            error={!!errorPassword}
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
    </Wrapper>
  );
};

export default SignIn;
