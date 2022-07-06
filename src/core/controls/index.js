import { createElement } from 'react';
import { RenderStringControl } from './string';
import { RenderButtonControl } from './button';
import { RenderRadioControl } from './radio';
import { RenderCheckboxControl } from './checkbox';
import { RenderNumberControl } from './number';
import { RenderBooleanControl } from './boolean';
var controlMap = {
    string: RenderStringControl,
    button: RenderButtonControl,
    radio: RenderRadioControl,
    checkbox: RenderCheckboxControl,
    number: RenderNumberControl,
    boolean: RenderBooleanControl,
};
export var RenderControl = function (_a) {
    var control = _a.control;
    var ControlComponent = controlMap[control.type];
    return ControlComponent ? createElement(ControlComponent, control) : null;
};
