import React, { useState } from "react";
import {
  Wrapper,
  CustomInput,
  Form,
  Password,
  InputButton,
  SpaceBetweenWrapper,
} from "./styles";
import Typography from "@mui/material/Typography";
import InputLabel from "@mui/material/InputLabel";
import Input from "@mui/material/Input";
import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";
import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

const SignIn = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [errorEmail, setErrorEmail] = useState<string>("");
  const [errorPassword, setErrorPassword] = useState<string>("");
  const [typeIsPassword, setTypeIsPassword] = useState<boolean>(true);
  const [rememberMe, setRememberMe] = useState<boolean>(false);

  return (
    <Wrapper>
      <Typography variant="h1" align="center">
        Sign In
      </Typography>
      <Form component="form">
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
          autoComplete="false"
          error={!!errorEmail}
        />
        <Password variant="standard">
          <InputLabel htmlFor="standard-adornment-password">
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
            control={<Checkbox checked={rememberMe} onChange={() => setRememberMe(!rememberMe)} />} 
            label="Remember me" 
          />
        </SpaceBetweenWrapper>
      </Form>
    </Wrapper>
  );
};

export default SignIn;
