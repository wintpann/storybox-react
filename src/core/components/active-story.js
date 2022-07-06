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
export var ActiveStory = function (_a) {
    var containerRef = _a.containerRef, Story = _a.Story;
    return (_jsx("div", __assign({ className: "storybox-active-story", ref: containerRef }, { children: Story && _jsx(Story, {}) })));
};
