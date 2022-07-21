import styled from "styled-components";
import Box, { BoxProps } from "@mui/material/Box";
import { ReactComponent as IncodeLogo } from "../../../assets/images/incode.svg";

export const Wrapper = styled(Box)<BoxProps>`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  height: 100%;
  padding-bottom: 8.2rem;
  justify-content: center;

  .MuiButton-root {
    width: 23.5714rem;
    background-color: #539713;
    text-transform: none;
    border-radius: 2px;
    height: 3.1428rem;
    color: white;
    font-family: "Montserrat";
    font-style: normal;
    font-weight: 600;
    font-size: 1.1rem;
    line-height: 155%;
    margin-bottom: 1.76rem;
    margin-top: 2.285rem;

    &:hover {
      background-color: white;
      color: #539713;
    }
  }

  .header {
    font-family: "Montserrat";
    font-weight: 600;
    color: white;
    font-size: 1.168rem;
    line-height: 155%;
  }
`;

export const Logo = styled(IncodeLogo)`
  width: 15.714rem;
  height: 14.285rem;
  margin-bottom: 1.714rem;
`;
