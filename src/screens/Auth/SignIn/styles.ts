import styled from "styled-components";
import Box, { BoxProps } from "@mui/material/Box";
import TextField, { TextFieldProps } from "@mui/material/TextField";
import FormControl, { FormControlProps } from "@mui/material/FormControl";
import IconButton, { IconButtonProps } from "@mui/material/IconButton";
import { Link, LinkProps } from "react-router-dom";

export const Wrapper = styled(Box)<BoxProps>`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;

  .MuiTypography-root {
    font-family: "Montserrat";
    font-size: 4rem;
    font-weight: 700;
    margin-top: 11.2rem;
    letter-spacing: 0.123rem;
    color: white;
    font-size: 4rem;
    margin-bottom: 2.5rem;
    text-transform: uppercase;
    line-height: 150%;
  }
`;

export const Form = styled(Box)<BoxProps>`
  width: 23.5714rem;

  .MuiInput-root:hover:not(.Mui-disabled):before {
    border-bottom: none;
  }

  .MuiButton-root {
    margin-top: 1.74rem;
    background-color: #539713;
    text-transform: none;
    border-radius: 2px;
    width: 100%;
    height: 3.1428rem;
    color: white;
    font-family: "Montserrat";
    font-style: normal;
    font-weight: 600;
    font-size: 1.03rem;
    line-height: 155%;
    margin-bottom: 1.76rem;

    &:hover {
      background-color: white;
      color: #539713;
    }
  }

  .error .MuiInputLabel-root {
    color: #ff8080;
  }

  .error .MuiInputBase-root {
    border-bottom: 2px solid #ff8080;
  }
`;

export const CustomInput = styled(TextField)<TextFieldProps>`
  width: 23.571rem;

  .MuiInputBase-root {
    margin-bottom: 1.9rem;
  }

  .MuiInput-input {
    border-bottom: 2px solid white;
  }

  .MuiInput-input {
    color: rgba(255, 255, 255, 0.7);
    font-family: "Montserrat";
    font-weight: 400;
    font-size: 1.1428rem;
    margin-top: 0.27rem;
    font-size: 1.12rem;
  }

  .MuiInputLabel-root {
    color: white;
    font-family: "Montserrat";
    font-size: 1.3rem;
    line-height: 155%;
    font-weight: 400;
  }

  & label.Mui-focused {
    color: white;
  }

  .Mui-error .MuiInput-input {
    border-bottom: 2px solid #ff8080;
    color: #ff8080;
    margin-top: 0.27rem;
    font-weight: 400;
    font-size: 1.12rem;
  }

  & label.Mui-error {
    color: #ff8080;
  }
`;

export const Password = styled(FormControl)<FormControlProps>`
  width: 23.571rem;
  .MuiInputBase-root {
    border-bottom: 2px solid white;
  }

  .MuiInput-root:after {
    border-bottom: none;
  }

  .MuiInputBase-root {
    margin-top: 1.15rem;
  }

  .MuiInput-input {
    color: white;
    opacity: 0.7;
    font-family: "Montserrat";
    font-weight: 400;
    font-size: 1.1428rem;
    margin-top: 0.27rem;
    font-size: 1.12rem;
  }

  .MuiInputLabel-root {
    color: white;
    font-family: "Montserrat";
    font-size: 1.3rem;
    line-height: 155%;
    font-weight: 400;
  }

  & label.Mui-focused {
    color: white;
  }

  .Mui-error * {
    color: #ff8080;
  }

  .error {
    color: #ff8080;

    * {
      color: #ff8080;
    }
  }

  .MuiIconButton-root {
    padding: 0;
    padding-right: 0.08rem;
  }

 
`;

export const InputButton = styled(IconButton)<IconButtonProps>`
  svg {
    color: white;
    width: 1.8rem;
    height: 1.8rem;
  }
`;

export const SpaceBetweenWrapper = styled(Box)<BoxProps>`
  display: flex;
  justify-content: space-between;
  align-items: center;

  .MuiTypography-root {
    font-weight: 400;
    font-size: 0.688rem;
    margin: 0;
    text-transform: none;
    color: #f5f5f5;
    opacity: 0.8;
  }

  svg {
    width: 1.52rem;
    height: 1.52rem;
    margin-left: 0.2rem;
    color: white;
    opacity: 0.8;
  }

  input,
  .MuiCheckbox-root {
    width: max-content;
  }

  .MuiCheckbox-root {
    padding-right: 0.15rem;
  }
`;

export const CustomLink = styled(Link)<LinkProps>`
  color: #69b0ff;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  font-size: 0.8571rem;
  line-height: 155%;
  text-decoration: none;
  margin-right: 0.5rem;
`;

export const JustifyCenterWrapper = styled(Box)<BoxProps>`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  .MuiTypography-root {
    color: #f5f5f5;
    font-family: "Montserrat";
    font-style: normal;
    font-weight: 400;
    font-size: 0.82rem;
    line-height: 155%;
    text-decoration: none;
    margin-right: 0.5rem;
    text-transform: none;
    margin: 0;
    letter-spacing: 0.26px;
    margin-right: 0.35rem;
    margin-left: 0.2rem;
  }
`;
