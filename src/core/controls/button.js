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
export var RenderButtonControl = function (_a) {
    var name = _a.name, value = _a.value, setValue = _a.setValue;
    var onChange = function () { return setValue(value + 1); };
    return (_jsxs("div", __assign({ className: "storybox-control-common_wrapper" }, { children: [_jsx("div", __assign({ className: "storybox-control-common_label" }, { children: name })), _jsx("button", __assign({ type: "button", className: "storybox-control-button", onClick: onChange }, { children: "Click!" }))] })));
};
