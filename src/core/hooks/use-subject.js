import { useState } from 'react';
import { Subject } from '../utils';
import { useExhaustiveCallback, useExhaustiveEffect } from './use-exhaustive';
export var useSubjectValue = function (subject) {
    var _a = useState(subject.getState), state = _a[0], setState = _a[1];
    useExhaustiveEffect(function () { return subject.subscribe(setState); }, []);
    return state;
};
export var useCreateSubject = function (initial) {
    var subject = useState(function () { return new Subject(initial); })[0];
    var setSubjectValue = useExhaustiveCallback(function (updated) {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        subject.next(typeof updated === 'function' ? updated(subject.getState()) : updated);
    }, []);
    return [subject, setSubjectValue];
};
