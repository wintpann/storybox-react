var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
var appearanceMap = {
    input: 'text',
    range: 'range',
};
export var RenderNumberControl = function (_a) {
    var name = _a.name, value = _a.value, setValue = _a.setValue, min = _a.min, max = _a.max, _b = _a.step, step = _b === void 0 ? 1 : _b, integerOnly = _a.integerOnly, _c = _a.appearance, appearance = _c === void 0 ? 'input' : _c;
    var _d = useState(String(value)), localValue = _d[0], setLocalValue = _d[1];
    var _e = useState(true), isValid = _e[0], setIsValid = _e[1];
    var validate = function (num) {
        if (Number.isNaN(num))
            return false;
        if (max && num > max)
            return false;
        if (min && num < min)
            return false;
        if (integerOnly && !Number.isInteger(num))
            return false;
        return true;
    };
    var onChange = function (updated) {
        var stringCasted = String(updated).replace(/[^0-9-.]/g, '');
        var numberCasted = integerOnly ? parseInt(stringCasted, 10) : parseFloat(stringCasted);
        setLocalValue(stringCasted);
        var valid = validate(numberCasted);
        setIsValid(valid);
        if (valid) {
            setValue(numberCasted);
        }
    };
    var onBlur = function () {
        var numberCasted = integerOnly ? parseInt(localValue, 10) : parseFloat(localValue);
        var localInvalid = !validate(numberCasted);
        if (localInvalid) {
            setLocalValue(String(value));
            setIsValid(true);
        }
    };
    var onInputChange = function (e) {
        onChange(e.target.value);
    };
    var onKeyDown = function (e) {
        if (e.key === 'ArrowUp') {
            onChange(value + step);
        }
        else if (e.key === 'ArrowDown') {
            onChange(value - step);
        }
    };
    return (_jsxs("div", __assign({ className: "storybox-control-common_wrapper" }, { children: [_jsx("div", __assign({ className: "storybox-control-common_label" }, { children: name })), _jsx("input", { className: "storybox-control-number_input", type: appearanceMap[appearance], step: step, value: localValue, onChange: onInputChange, onKeyDown: onKeyDown, onBlur: onBlur, min: min, max: max, style: { boxShadow: !isValid ? '0 0 5px 2px red' : 'none' } }), appearance === 'range' && (_jsx("div", __assign({ className: "storybox-control-number_range-output" }, { children: localValue })))] })));
};
