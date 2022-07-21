import styled from "styled-components";
import Box, { BoxProps } from "@mui/material/Box";

export const Wrapper = styled(Box)<BoxProps>`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  height: 100%;
  padding-bottom: 6.7rem;
  justify-content: center;

  .header {
    font-family: "Montserrat";
    font-size: 4rem;
    font-weight: 700;
    letter-spacing: 0.123rem;
    color: white;
    font-size: 4rem;
    margin-bottom: 2.5rem;
    text-transform: uppercase;
    line-height: 150%;
  }

  .MuiButton-root {
    margin-top: 2.25rem;
  }
`;

export const CheckboxWrapper = styled(Box)<BoxProps>`
  margin-top: 0.4rem;
  .MuiTypography-root {
    font-weight: 400;
    font-size: 0.83rem;
    margin: 0;
    text-transform: none;
    color: #f5f5f5;
    opacity: 0.8;
    font-family: "Montserrat";
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
