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
import { jsxs as _jsxs, jsx as _jsx } from "react/jsx-runtime";
import { useState } from 'react';
export var ControlsCommon = function (_a) {
    var activeStoryBounds = _a.activeStoryBounds, windowBounds = _a.windowBounds, storiesList = _a.storiesList, setActiveStoryKey = _a.setActiveStoryKey, activeStoryKey = _a.activeStoryKey;
    var _b = useState(''), searchText = _b[0], setSearchText = _b[1];
    var storiesMatched = storiesList.filter(function (_a) {
        var key = _a[0];
        return key.toLowerCase().includes(searchText.toLowerCase());
    });
    return (_jsxs("div", __assign({ className: "storybox-controls-common" }, { children: [_jsxs("div", __assign({ className: "storybox-controls-common_bounds" }, { children: [_jsxs("div", { children: ["Window: ", windowBounds === null || windowBounds === void 0 ? void 0 : windowBounds.width, "\u00A0x\u00A0", windowBounds === null || windowBounds === void 0 ? void 0 : windowBounds.height] }), _jsxs("div", { children: ["Story: ", activeStoryBounds === null || activeStoryBounds === void 0 ? void 0 : activeStoryBounds.width, "\u00A0x\u00A0", activeStoryBounds === null || activeStoryBounds === void 0 ? void 0 : activeStoryBounds.height] })] })), _jsxs("div", __assign({ className: "storybox-controls-common_story-picker" }, { children: [_jsxs("div", __assign({ className: "storybox-controls-common_story-search" }, { children: [_jsx("span", { children: "Search:" }), _jsx("input", { type: "text", value: searchText, onChange: function (e) { return setSearchText(e.target.value); } })] })), _jsx("div", __assign({ className: "storybox-controls-common_story-picker-name" }, { children: activeStoryKey || 'No story selected' }))] })), _jsxs("div", __assign({ className: "storybox-controls-common_stories-list storybox-scroll" }, { children: [storiesMatched.map(function (_a) {
                        var key = _a[0];
                        return (_jsx("div", __assign({ onClick: function () { return setActiveStoryKey(key); }, className: "storybox-controls-common_stories-list-item", style: { background: key === activeStoryKey ? '#355c88' : undefined } }, { children: key }), key));
                    }), storiesMatched.length === 0 && _jsx("span", { children: "No stories found" })] }))] })));
};
