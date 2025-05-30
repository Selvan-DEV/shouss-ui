import React from "react";
import { Button } from "@mui/material";
import styled from "@emotion/styled";

const CustomButtonStyled = styled(Button)`
  background-color: var(--app-primary-color);
  color: var(--background);
  border-radius: 30px;
  width: ${({ width }) => width || '162px'};
  height: 46px;
  font-weight: bold;
  text-transform: uppercase;
  display: flex;
  align-items: center;
  gap: 8px;
  line-height: normal;

  &:hover {
    background-color: var(--app-primary-color);
  }
`;

const CustomButton = (props) => {
  const { onClick, name, width } = props;
  return (
    <CustomButtonStyled onClick={onClick} type="submit" width={width}>
      {name}
    </CustomButtonStyled>
  );
};

export default CustomButton;
