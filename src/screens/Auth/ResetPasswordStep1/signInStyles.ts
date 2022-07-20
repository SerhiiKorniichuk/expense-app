import styled from "styled-components";
import Box, { BoxProps } from "@mui/material/Box";

export const Wrapper = styled(Box)<BoxProps>`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  height: 100%;
  padding-bottom: 5rem;
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
    margin-bottom: 2.7rem;
    text-transform: uppercase;
    line-height: 120%;
  }

  .description {
    font-family: "Montserrat";
    font-size: 1.155rem;
    font-weight: 600;
    color: white;
    margin-bottom: 2rem;
    line-height: 160%;
    opacity: 0.8;
  }
`;