import { RefCallback, useEffect, useState } from 'react';

export const uid = (() => {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    const charactersLength = characters.length;

    return (length = 20) => {
        let result = '';
        for (let i = 0; i < length; i++) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return result;
    };
})();

export const useExhaustiveEffect = useEffect;

export const useNode = <T extends HTMLElement = HTMLElement>(): [
    node: T | null,
    refCallback: RefCallback<T>,
] => {
    const [node, setNode] = useState<T | null>(null);
    return [
        node,
        (updated: T | null) => {
            if (node !== updated && updated !== null) setNode(updated);
        },
    ];
};

export const noop = () => null;
