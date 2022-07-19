import React from "react";
import Box, { BoxProps } from '@mui/material/Box';
import styled from "styled-components";
import { BrowserRouter } from "react-router-dom";
import Auth from "./pages/Auth";

const Wrapper = styled(Box)<BoxProps>`
  display: flex;
`;

function App() {
  return (
    <Wrapper>
      <BrowserRouter>
      <Auth />
      </BrowserRouter>
    </Wrapper>
  );
}

export default App;
