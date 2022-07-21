import styled from "styled-components";
import Box, { BoxProps } from "@mui/material/Box";

export const Wrapper = styled(Box)<BoxProps>`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  height: 100%;
  padding-bottom: 6.3rem;
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
`;