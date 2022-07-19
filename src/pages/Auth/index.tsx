import React, { useState } from "react";
import { LeftBlock, CustomLogo, RightBlock } from "./styles";
import { Routes, Route } from "react-router-dom";
import rightImage from "../../assets/images/neverGiveUp.png";
import SignIn from "../../screens/Auth/SignIn";

const Auth = () => {
  const [ image ] = useState<String>(rightImage);

  return (
    <>
      <LeftBlock>
        <CustomLogo />
        <Routes>
          <Route path="/" element={<SignIn />} />
        </Routes>
      </LeftBlock>
      <RightBlock $rightImage={image} />
    </>
  );
};

export default Auth;
