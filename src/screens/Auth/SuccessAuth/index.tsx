import React, { useEffect } from "react";
import { Wrapper, Logo } from "./successAuthStyles";
import Button from "@mui/material/Button";
import rightImage from "../../../assets/images/neverGiveUp.png";
import { useNavigate } from "react-router-dom";
import Typography from "@mui/material/Typography";

interface SignUpProps {
  setImage: any;
  path: string;
  buttonText: string;
  header: string;
}

const SuccessAuth = ({ setImage, path, buttonText, header }: SignUpProps) => {
  const navigate = useNavigate();

  useEffect(() => {
    setImage(rightImage);
  }, []);

  return (
    <Wrapper>
      <Logo />
      <Typography variant="h1" align="center" className="header">
        {header.split("\n").map((text, index) => (
          <React.Fragment key={index}>
            {text} <br />
          </React.Fragment>
        ))}
      </Typography>
      <Button type="button" variant="contained" onClick={() => navigate(path)}>
        {buttonText}
      </Button>
    </Wrapper>
  );
};

export default SuccessAuth;
