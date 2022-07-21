import React, { useState } from "react";
import { LeftBlock, CustomLogo, RightBlock } from "./styles";
import { Routes, Route } from "react-router-dom";
import rightImage from "../../assets/images/neverGiveUp.png";
import SignIn from "../../screens/Auth/SignIn";
import SignUp from "../../screens/Auth/SignUp";
import ResetPasswordStep1 from "../../screens/Auth/ResetPasswordStep1";
import ResetPasswordStep2 from "../../screens/Auth/ResetPasswordStep2";
import SuccessAuth from "../../screens/Auth/SuccessAuth";

const Auth = () => {
  const [image, setImage] = useState<String>(rightImage);

  return (
    <>
      <LeftBlock>
        <CustomLogo />
        <Routes>
          <Route path="/sign-in" element={<SignIn setImage={setImage} />} />
          <Route path="/sign-up" element={<SignUp setImage={setImage} />} />
          <Route
            path="/reset-password"
            element={<ResetPasswordStep1 setImage={setImage} />}
          />
          <Route
            path="/reset-password-step-2"
            element={<ResetPasswordStep2 setImage={setImage} />}
          />
          <Route
            path="/reset-password-step-3"
            element={
              <SuccessAuth
                setImage={setImage}
                path="/auth/sign-in"
                buttonText="Login"
                header={"Your password has been" + "\n" + "successfully changed"}
              />
            }
          />
          <Route
            path="/successful-registration"
            element={
              <SuccessAuth
                setImage={setImage}
                path="/dashboard"
                buttonText="Let`s Start"
                header={"Your account" + "\n" + "successfully created"}
              />
            }
          />
        </Routes>
      </LeftBlock>
      <RightBlock $rightImage={image} />
    </>
  );
};

export default Auth;
