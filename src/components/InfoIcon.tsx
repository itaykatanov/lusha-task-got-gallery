import ReactTooltip from "react-tooltip";
import styled from "@emotion/styled";
import {PRIMARY_COLOR, WHITE_COLOR} from "../const";

const StyledInfoIcon = styled.div`
  cursor: pointer;
`;

type InfoIconProps = {
    dataTipId: string;
}

export const InfoIcon = (props: InfoIconProps) => {
    return (
        <StyledInfoIcon>
            <svg
                color={WHITE_COLOR}
                data-tip={props.dataTipId}
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="feather feather-info"
                viewBox="0 0 24 24"
            >
                <circle cx="12" cy="12" r="10"></circle>
                <path d="M12 16L12 12"></path>
                <path d="M12 8L12.01 8"></path>
            </svg>
            <ReactTooltip border={true} borderColor={WHITE_COLOR} backgroundColor={PRIMARY_COLOR}  type={"info"} effect={"float"} place={"bottom"}/>
        </StyledInfoIcon>
    );
}