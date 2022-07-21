import styled from "styled-components";
import Box, { BoxProps } from "@mui/material/Box";

export const Wrapper = styled(Box)<BoxProps>`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  height: 100%;
  padding-bottom: 6.2rem;
  justify-content: center;

  .MuiButton-root {
    margin-top: 0.4rem;
  }

  .header {
    font-family: "Montserrat";
    font-weight: 700;
    letter-spacing: 0.123rem;
    color: white;
    font-size: 3.26rem;
    margin-bottom: 2.9rem;
    text-transform: uppercase;
    line-height: 120%;
  }

  form {
    display: flex;
    flex-direction: column;
    row-gap: 2rem;
  }
`;