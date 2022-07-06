import { Dispatch, SetStateAction, useState } from 'react';
import { Subject } from '../utils';
import { useExhaustiveCallback, useExhaustiveEffect } from './use-exhaustive';

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
