import styled from "@emotion/styled";
import {InfoIcon} from "./InfoIcon";
import {WHITE_COLOR} from "../const";

const StyledCard = styled.div`
  flex: 1 0 21%;
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 25%;
  min-width: 150px;
  padding-bottom: 10px;
  border-radius: 0.5rem;
  box-shadow: 0.05rem 0.1rem 0.3rem 0.03rem rgba(0, 0, 0, 0.45);

  &:hover {
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
    }
`;

const StyledIconImageWrapper = styled.div`
  position: relative;
  width: 100%;
`;

const StyledIcon = styled.div`
  align-self: flex-end;
  position: absolute;
  right: 0;
  margin: 5px;
`;

const StyledImageWrapper = styled.div`
  flex: 1;
  display: block;
`;

const StyledImage = styled.img`
  max-height: 180px;
  object-fit: cover;
  object-position: 50% 10%;
  margin-bottom: 10px;
  display: block;
  aspect-ratio: 4 / 3;
  width: 100%;
  height: 100%;
  border-radius: 0.5rem 0.5rem 0 0;
`;

const StyledName = styled.div`
  color: ${WHITE_COLOR};
  font-weight: bold;
  text-align: center;
`;


type CardProps = {
    imageSrc: string;
    name: string;
    title: string;
    house: string;
}

export const Card = (props: CardProps) => {
    return (
        <StyledCard>
            <StyledIconImageWrapper>
                <StyledIcon>
                    <InfoIcon dataTipId={`${props.name}, ${props.title}. \n House: ${props.house}`}/>
                </StyledIcon>
                <StyledImageWrapper>
                    <StyledImage src={props.imageSrc} alt={props.name} />
                </StyledImageWrapper>
            </StyledIconImageWrapper>
            <StyledName>{props.name}</StyledName>
        </StyledCard>
    )
}