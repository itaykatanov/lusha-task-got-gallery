import styled from "@emotion/styled";
import {BLACK_COLOR, SECONDARY_COLOR} from "../const";

const StyledButton = styled.button`
  width: 150px;
  align-self: center;
  padding: 10px;
  border-radius: 6px;
  background-color: ${SECONDARY_COLOR};
  font-weight: bold;
  color: ${BLACK_COLOR};
  border-color: #282c34;
  cursor: pointer;
  margin: 20px auto;
  &:hover {
    transform: translateY(-1px);
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  }
  &:disabled {
    background-color: #d3d3d3;
    cursor: not-allowed;
`;


type ButtonProps = {
    onClick: () => void;
    disabled: boolean;
    text: string;
}

export const Button = (props: ButtonProps) => {
    return <StyledButton role={"button"} onClick={props.onClick} disabled={props.disabled}>{props.text}</StyledButton>
}