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
import { useRef, useState } from 'react';
import { ControlsWindow } from './controls-window';
import { ActiveStory } from './active-story';
import { WindowResizer } from './window-resizer';
var dataRefInitial = {
    controlsWindowWidth: 500,
};
export var StoryboxWindow = function (_a) {
    var stories = _a.stories;
    var dataRef = useRef(dataRefInitial);
    var controlsWindowRef = useRef(null);
    var activeStoryRef = useRef(null);
    var _b = useState(''), activeStoryKey = _b[0], setActiveStoryKey = _b[1];
    var onStartResize = function () {
        if (!controlsWindowRef.current)
            return;
        dataRef.current.controlsWindowWidth = controlsWindowRef.current.offsetWidth;
    };
    var onResize = function (_a) {
        var deltaX = _a[0];
        if (!controlsWindowRef.current)
            return;
        controlsWindowRef.current.style.flex = "0 0 ".concat(dataRef.current.controlsWindowWidth + deltaX, "px");
    };
    return (_jsxs("div", __assign({ className: "storybox-container" }, { children: [_jsx(ControlsWindow, { containerRef: controlsWindowRef, activeStoryRef: activeStoryRef, storiesList: Object.entries(stories), setActiveStoryKey: setActiveStoryKey, activeStoryKey: activeStoryKey }), _jsx(WindowResizer, { onMove: onResize, onStart: onStartResize }), _jsx(ActiveStory, { containerRef: activeStoryRef, Story: stories[activeStoryKey] })] })));
};
