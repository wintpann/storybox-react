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
import { useContext, useEffect, useState, useRef } from 'react';
import { uid } from '../utils';
import { ControlsContext } from '../context';
import { useExhaustiveEffect } from '../hooks/use-exhaustive';
var createGenericControlHook = function (type) {
    var useGenericControl = function (control) {
        var _a = useContext(ControlsContext), deleteControl = _a.deleteControl, updateControlValue = _a.updateControlValue, createControl = _a.createControl;
        var _b = useState(control.defaultValue), value = _b[0], setValue = _b[1];
        var idRef = useRef();
        useExhaustiveEffect(function () {
            if (idRef.current)
                updateControlValue(idRef.current, value);
        }, [value]);
        useExhaustiveEffect(function () {
            var id = uid();
            idRef.current = id;
            createControl(id, __assign(__assign({}, control), { type: type, value: value, setValue: setValue, id: id }));
            return function () { return deleteControl(id); };
        }, []);
        useEffect(function () { return setValue(control.defaultValue); }, [control.defaultValue]);
        return [value, setValue];
    };
    return useGenericControl;
};
export var useBooleanControl = createGenericControlHook('boolean');
export var useStringControl = createGenericControlHook('string');
export var useNumberControl = createGenericControlHook('number');
export var useRadioControl = createGenericControlHook('radio');
export var useCheckboxControl = createGenericControlHook('checkbox');
export var useButtonControl = function (control) {
    var _a = useContext(ControlsContext), deleteControl = _a.deleteControl, updateControlValue = _a.updateControlValue, createControl = _a.createControl;
    var _b = useState(0), value = _b[0], setValue = _b[1];
    var idRef = useRef();
    useExhaustiveEffect(function () {
        var _a;
        if (idRef.current) {
            updateControlValue(idRef.current, value);
            (_a = control.onClick) === null || _a === void 0 ? void 0 : _a.call(control);
        }
    }, [value]);
    useExhaustiveEffect(function () {
        var id = uid();
        idRef.current = id;
        createControl(id, __assign(__assign({}, control), { type: 'button', value: value, setValue: setValue, defaultValue: 0, id: id }));
        return function () { return deleteControl(id); };
    }, []);
    return [value, setValue];
};
