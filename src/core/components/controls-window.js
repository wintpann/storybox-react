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
import { useContext, useState } from 'react';
import { ControlsCommon } from './controls-common';
import { useBounds } from '../hooks/use-bounds';
import { useWindowBounds } from '../hooks/use-window-bounds';
import { ControlsContext } from '../context';
import { useSubjectValue } from '../hooks/use-subject';
import { RenderControl } from '../controls';
export var ControlsWindow = function (_a) {
    var containerRef = _a.containerRef, activeStoryRef = _a.activeStoryRef, storiesList = _a.storiesList, setActiveStoryKey = _a.setActiveStoryKey, activeStoryKey = _a.activeStoryKey;
    var _b = useState(), activeStoryBounds = _b[0], setActiveStoryBounds = _b[1];
    var _c = useState(), windowBounds = _c[0], setWindowBounds = _c[1];
    var controlsSubject = useContext(ControlsContext).controls;
    var controls = useSubjectValue(controlsSubject);
    useBounds(activeStoryRef, setActiveStoryBounds);
    useWindowBounds(setWindowBounds);
    return (_jsxs("div", __assign({ ref: containerRef, className: "storybox-controls-window storybox-scroll" }, { children: [_jsx(ControlsCommon, { activeStoryBounds: activeStoryBounds, windowBounds: windowBounds, storiesList: storiesList, setActiveStoryKey: setActiveStoryKey, activeStoryKey: activeStoryKey }), _jsx("div", __assign({ className: "storybox-controls-story" }, { children: Object.entries(controls).map(function (_a) {
                    var id = _a[0], control = _a[1];
                    return (_jsx(RenderControl, { control: control }, id));
                }) }))] })));
};
