import {useEffect, useState} from "react";
import {Character} from "../types";
import {getImagesFromApi} from "../utils";


export const useGetImages = () => {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [imagesList, setImagesList] = useState<Character[]>([]);


    useEffect(() => {
        let isCancelled = false;
        try {
            getImagesFromApi().then((data) => {
                if (!isCancelled){
                    setImagesList(data);
                    setLoading(false);
                }
            })
        } catch (error) {
            setLoading(false);
            setError(true);
        }

        return () => {
            isCancelled = true;
        }
    },[]);

    return {loading, error, imagesList}

}