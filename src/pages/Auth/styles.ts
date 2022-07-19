import Box, { BoxProps } from "@mui/material/Box";
import styled from "styled-components";
import { ReactComponent as Logo } from "../../assets/images/logo.svg";

interface RightImage {
  $rightImage: String
};

export const LeftBlock = styled(Box)<BoxProps>`
  min-height: 100vh;
  width: calc(100% - 52.2857rem);
  background-color: #1d283a;
  padding: 3.4285rem 4.2857rem;
`;

export const CustomLogo = styled(Logo)`
  width: 9.2857rem;
  height: 3.5rem;
`;

export const RightBlock = styled(Box)<RightImage>`
  min-height: 100vh;
  width: 52.2857rem;
  background-image: ${({ $rightImage }) => `url(${($rightImage)})`};
`;
