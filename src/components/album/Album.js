import React from "react";

import { Rating } from "../rating/Rating";

import "./album.css";

export const Album = ({ album }) => {
    return (
        <div className="album-card">
            <div className="album-image">
                <img src={album.image} alt={album.name} />
            </div>

            <div className="album-description">
                <h1>{album.artist}</h1>
                <h2>{album.name}</h2>
                <p>
                    <b>{album.year}</b>
                </p>

                <hr />

                <Rating rating={album?.rating} />

                {album?.liked && <p className="liked">♥️</p>}
            </div>
        </div>
    );
};
