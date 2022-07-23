import { createContext } from 'react';
import { Control, ControlsContextType } from './type';
import { noop, Subject } from './utils';

export const ControlsContext = createContext<ControlsContextType>({
    controls: new Subject<Record<string, Control>>({}),
    updateControl: noop,
    deleteControl: noop,
    createControl: noop,
    withinContext: false,
});
