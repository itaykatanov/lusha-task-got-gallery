import React from "react";
import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";


const LoaderHideAnimation = keyframes`
  0% { opacity: 1; }
  99% { opacity: 0; }
  100% { opacity: 0; visibility: hidden; }
`;

const LoaderBar = keyframes`
  0% {
    transform: translateX(-30px);
    opacity: 0;
  }
  25% {
    opacity: 1;
  }
  50% {
    transform: translateX(30px);
    opacity: 0;
  }
  100% {
    opacity: 0;
  }
`;

const LoaderWrapper = styled.div<{ color?: string }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 5000;
  background-color: ${({ color }) => color ? color : "#ffffff"};
  color: black;
  opacity: 1;

  &.${"loader-hide"} {
    animation: ${LoaderHideAnimation} 1s ease-in both;
  }
`;

const LoaderImageWrapper = styled.div<{logoSrc: string}>`
  background-image: url('${({ logoSrc }) => logoSrc}');
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;

  height: 5rem;
  width: 15rem;

`;

const LoaderBarDot = styled.span<{index: number, color: string}>`
  height: .4rem;
  width: .4rem;
  background-color: ${({ color }) => color ?? "#000000"};
  display: inline-block;
  margin: 1.2rem .2rem;

  border-radius: 100%;

  animation: ${LoaderBar} 3s ${({ index }) => index * 0.2}s infinite;
  animation-timing-function: cubic-bezier(0.03, 0.615, 0.995, 0.415);
  animation-fill-mode: both;
`;

type LoaderProps = {
    logoSrc: string;
    hide: boolean;
}

export const Loader = (props: LoaderProps) => {
    const className = props.hide ? "loader-hide" : "";

    return (
        <LoaderWrapper className={className} id={"loaderWrapper"} color={"#600dff"} >
            <LoaderImageWrapper logoSrc={props.logoSrc} />
            <div>
                {[0, 1, 2, 3, 4, 5].map((dot) => (
                    <LoaderBarDot key={dot} index={dot} color={"#ffffff"} />
                ))}
            </div>
        </LoaderWrapper>
    );
};