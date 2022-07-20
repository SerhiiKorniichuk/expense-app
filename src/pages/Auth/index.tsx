import React, { useState } from "react";
import { LeftBlock, CustomLogo, RightBlock } from "./styles";
import { Routes, Route } from "react-router-dom";
import rightImage from "../../assets/images/neverGiveUp.png";
import SignIn from "../../screens/Auth/SignIn";
import SignUp from "../../screens/Auth/SignUp";
import ResetPasswordStep1 from "../../screens/Auth/ResetPasswordStep1";

const Auth = () => {
  const [ image, setImage ] = useState<String>(rightImage);

  return (
    <>
      <LeftBlock>
        <CustomLogo />
        <Routes>
          <Route path="/sign-in" element={<SignIn setImage={setImage} />} />
          <Route path="/sign-up" element={<SignUp setImage={setImage} />} />
          <Route path="/reset-password" element={<ResetPasswordStep1 setImage={setImage} />} />
        </Routes>
      </LeftBlock>
      <RightBlock $rightImage={image} />
    </>
  );
};

export default Auth;
