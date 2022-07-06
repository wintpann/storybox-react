import { createContext } from 'react';
import { noop, Subject } from './utils';
export var ControlsContext = createContext({
    controls: new Subject({}),
    updateControlValue: noop,
    deleteControl: noop,
    createControl: noop,
});
