import { useEffect, useState } from "react";

export const useFetchAlbums = () => {
    const [albums, setAlbums] = useState([]);

    useEffect(() => {
        const url = "https://albums-collection-api.herokuapp.com/api/albums/";

        fetch(url)
            .then((resp) => resp.json())
            .then((data) => setAlbums(data));
    }, []);

    return albums;
};
