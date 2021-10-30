import React, { useEffect, useState } from "react";

import "./rating.css";

export const Rating = ({ rating }) => {
    const [stars, setStars] = useState([]);

    useEffect(() => {
        const amount = [...Array(rating).keys()];
        setStars(amount);
    }, [rating]);

    return (
        <section className="stars">
            {stars.map((star) => (
                <p key={star}>⭐️</p>
            ))}
        </section>
    );
};
