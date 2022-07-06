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
export var RenderStringControl = function (_a) {
    var name = _a.name, value = _a.value, setValue = _a.setValue, minLength = _a.minLength, maxLength = _a.maxLength;
    var onChange = function (e) {
        var updated = e.target.value;
        if (maxLength && updated.length > maxLength)
            return;
        if (minLength && updated.length < minLength)
            return;
        setValue(updated);
    };
    return (_jsxs("div", __assign({ className: "storybox-control-common_wrapper" }, { children: [_jsx("div", __assign({ className: "storybox-control-common_label" }, { children: name })), _jsx("input", { className: "storybox-control-string_input", type: "text", value: value, onChange: onChange })] })));
};
