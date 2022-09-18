// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import React, { useEffect, useState } from 'react';

const fetchRandomNumber = () => Promise.resolve(Math.random());

export const Bullshit = () => {
    const [number, setNumber] = useState();

    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(async () => {
        setNumber(await fetchRandomNumber());
    });

    return <div> Number: {number} </div>;
};
