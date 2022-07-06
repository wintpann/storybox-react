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
import { jsx as _jsx } from "react/jsx-runtime";
import { useDragHandlers } from '../hooks/use-drag';
var getResizeDragCursor = function () { return 'ew-resize'; };
export var WindowResizer = function (_a) {
    var onMove = _a.onMove, onStart = _a.onStart;
    var resizerHandlers = useDragHandlers({
        onMove: onMove,
        onStartMove: onStart,
        getCursor: getResizeDragCursor,
    });
    return (_jsx("div", __assign({ className: "storybox-window-resizer" }, resizerHandlers, { children: _jsx("div", { className: "storybox-window-resizer_stick" }) })));
};
