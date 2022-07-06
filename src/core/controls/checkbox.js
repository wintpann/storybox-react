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
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
export var RenderCheckboxControl = function (_a) {
    var name = _a.name, value = _a.value, setValue = _a.setValue, options = _a.options;
    var onChange = function (e) {
        var checked = e.target.checked;
        if (checked) {
            setValue(__spreadArray(__spreadArray([], value, true), [e.target.value], false));
        }
        else {
            setValue(value.filter(function (item) { return item !== e.target.value; }));
        }
    };
    return (_jsxs("div", __assign({ className: "storybox-control-common_wrapper" }, { children: [_jsx("div", __assign({ className: "storybox-control-common_label" }, { children: name })), _jsx("div", __assign({ className: "storybox-control-checkbox_button-group" }, { children: options.map(function (option) { return (_jsxs("label", __assign({ className: "storybox-control-checkbox_button" }, { children: [_jsx("span", __assign({ className: "storybox-control-checkbox_label" }, { children: option })), _jsx("input", { type: "checkbox", checked: value.includes(option), value: option, onChange: onChange })] }), option)); }) }))] })));
};
