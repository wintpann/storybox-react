import { Dispatch, RefCallback, SetStateAction, useCallback, useEffect, useState } from 'react';

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
export const useExhaustiveCallback = useCallback;

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

export class Subject<T> {
    subscribers: Array<(value: T) => void> = [];

    value: T;

    constructor(value: T) {
        this.value = value;
    }

    next = (value: T) => {
        this.value = value;
        this.subscribers.forEach((sub) => sub(value));
    };

    subscribe = (callback: (value: T) => void) => {
        this.subscribers.push(callback);
        return () => {
            this.subscribers.splice(this.subscribers.indexOf(callback), 1);
        };
    };

    getState = () => this.value;
}

export const useSubjectValue = <T>(subject: Subject<T>): T => {
    const [state, setState] = useState(subject.getState);
    useExhaustiveEffect(() => subject.subscribe(setState), []);
    return state;
};

export const useCreateSubject = <T>(initial: T): [Subject<T>, Dispatch<SetStateAction<T>>] => {
    const [subject] = useState(() => new Subject(initial));
    const setSubjectValue = useExhaustiveCallback((updated: T | ((prev: T) => T)) => {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        subject.next(typeof updated === 'function' ? updated(subject.getState()) : updated);
    }, []);
    return [subject, setSubjectValue];
};
