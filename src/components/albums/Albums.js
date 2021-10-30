import React from "react";

import { Album } from "../album/Album";
import { useFetchAlbums } from "../../hooks/useFetchAlbums";

import "./albums.css";

export const Albums = () => {
    const albums = useFetchAlbums();

    return (
        <section>
            {albums && albums.length ? (
                <div className="album-wrapper">
                    {albums.map((album) => (
                        <Album key={album._id} album={album} />
                    ))}
                </div>
            ) : (
                <div>Cargando...</div>
            )}
        </section>
    );
};
