import {Character} from "./types";


const API = "https://thronesapi.com/api/v2/Characters";

export async function getImagesFromApi(): Promise<Character[]>  {
    const fetchResponse = await fetch(API);
    const characters: Character[] = await fetchResponse.json();
    return characters;
}