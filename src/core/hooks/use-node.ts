import { RefCallback, useState } from 'react';

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
