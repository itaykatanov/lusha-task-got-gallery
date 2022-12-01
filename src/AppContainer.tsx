import {useEffect, useState} from "react";
import {Loader} from "./components/Loader";
import LushaLogo from "./assets/Lusha.png";
import {getImagesFromApi} from "./utils";
import {Character} from "./types";
import {Card} from "./components/Card";
import styled from "@emotion/styled";
import {Button} from "./components/Button";


const IMAGE_INTERVAL = 4;

const StyledContainer = styled.div`
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
    const [loading, setLoading] = useState(true);
    const [imagesList, setImagesList] = useState<Character[]>([]);
    const [counter, setCounter] = useState(IMAGE_INTERVAL);

    useEffect(() => {
        let isCancelled = false;
        getImagesFromApi().then((data) => {
            if (!isCancelled){
                setImagesList(data);
                setLoading(false);
            }
        })
        return () => {
            isCancelled = true;
        }
    },[]);

    const imageArray = imagesList.slice(0, counter).map((character) =>
        <Card key={character.id}
              imageSrc={character.imageUrl}
              name={character.fullName}
              title={character.title}
              house={character.family}
        />
    );

    return (
        <>
            <Loader logoSrc={LushaLogo} hide={!loading}/>
            <a href="https://www.lusha.com/" target="_blank" >
                <img style={{margin: "20px"}} src="https://www.lusha.com/wp-content/uploads/2020/06/logo.svg" alt="Lusha Logo"/>
            </a>
            <StyledContainer>
                <StyledCardsContainer>
                    {imageArray}
                </StyledCardsContainer>
                <Button text={"Load more"} disabled={counter > imagesList.length} onClick={() => setCounter(counter + IMAGE_INTERVAL)}/>
            </StyledContainer>
        </>

    )
}