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
import { jsxs as _jsxs } from "react/jsx-runtime";
import { useNode } from '../hooks/use-node';
export var StoryBox = function (_a) {
    var children = _a.children;
    var _b = useNode(), node = _b[0], setNode = _b[1];
    var childrenFunction = typeof children === 'function' && node ? children(node) : null;
    var childrenContent = typeof children !== 'function' ? children : null;
    return (_jsxs("div", __assign({ className: "storybox-active-story-content", ref: setNode }, { children: [childrenContent, childrenFunction] })));
};
