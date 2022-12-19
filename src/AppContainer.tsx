import {useEffect, useState} from "react";
import {Loader} from "./components/Loader";
import LushaLogo from "./assets/Lusha.png";
import {getImagesFromApi} from "./utils";
import {Character} from "./types";
import {Card} from "./components/Card";
import styled from "@emotion/styled";
import {Button} from "./components/Button";
import {SECONDARY_COLOR} from "./const";
import {useGetImages} from "./hooks/useGetImages";


const IMAGE_INTERVAL = 4;

const StyledHeader = styled.header`
  position: relative;
  width: 100%;
  height: 100px;
  padding: 0 4rem;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  box-shadow: 0 10px 20px 0 rgb(0 0 0 / 20%);
  
  #header-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: ${SECONDARY_COLOR};
  }
  
  #header-logo {
    width: 10rem;
  }
`;

const StyledBody = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  margin: 5% auto 20px;
`;

const StyledCardsContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 15px;
  margin-bottom: 20px;

  @media (max-width: 720px) {
    flex-direction: column;
    align-content: center;

  }
`;

export const AppContainer= () => {
    const { loading, error, imagesList } = useGetImages();
    const [counter, setCounter] = useState(IMAGE_INTERVAL);

    const imageArray = imagesList.slice(0, counter).map((character) =>
        <Card key={character.id}
              imageSrc={character.imageUrl}
              name={character.fullName}
              title={character.title}
              house={character.family}
        />
    );
    
    if (error){
        return <div>Error....</div>
    }

    return (
        <>
            <Loader logoSrc={LushaLogo} hide={!loading}/>
            <StyledHeader>
                <div id="header-overlay">
                    <a href="https://www.lusha.com/" target="_blank" >
                        <img id="header-logo" style={{margin: "20px"}} src="https://www.lusha.com/wp-content/uploads/2020/06/logo.svg" alt="Lusha Logo"/>
                    </a>
                </div>
            </StyledHeader>
            <StyledBody>
                <StyledCardsContainer>
                    {imageArray}
                </StyledCardsContainer>
                <Button text={"Load more"} disabled={counter > imagesList.length} onClick={() => setCounter(counter + IMAGE_INTERVAL)}/>
            </StyledBody>
        </>

    )
}