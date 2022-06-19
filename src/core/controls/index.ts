import { FC, createElement } from 'react';
import { Control, PropMap } from '../type';
import { RenderStringControl } from './string';
import { RenderButtonControl } from './button';
import { RenderRadioControl } from './radio';
import { RenderCheckboxControl } from './checkbox';
import { RenderNumberControl } from './number';
import { RenderBooleanControl } from './boolean';

const controlMap: PropMap<Control, 'type', FC<any>> = {
    string: RenderStringControl,
    button: RenderButtonControl,
    radio: RenderRadioControl,
    checkbox: RenderCheckboxControl,
    number: RenderNumberControl,
    boolean: RenderBooleanControl,
};

export const RenderControl: FC<{ control: Control }> = ({ control }) => {
    const ControlComponent = controlMap[control.type];

    return ControlComponent ? createElement(ControlComponent, control) : null;
};
