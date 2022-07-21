import React from "react";
import Box, { BoxProps } from '@mui/material/Box';
import styled from "styled-components";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Auth from "./pages/Auth";

const Wrapper = styled(Box)<BoxProps>`
  display: flex;
`;

function App() {
  return (
    <Wrapper>
      <BrowserRouter>
      <Routes>
        <Route path="/auth/*" element={<Auth />}/>
        <Route path="/" element={<Navigate to="/auth/sign-in" replace/>} />
      </Routes>
      </BrowserRouter>
    </Wrapper>
  );
}

export default App;
