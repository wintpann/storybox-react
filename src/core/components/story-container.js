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
import { StoryboxWindow } from './storybox-window';
import { ControlsContext } from '../context';
import { useCreateSubject } from '../hooks/use-subject';
import { useExhaustiveCallback } from '../hooks/use-exhaustive';
import '../styles.scss';
export var StoryContainer = function (_a) {
    var stories = _a.stories;
    var _b = useCreateSubject({}), controls = _b[0], setControls = _b[1];
    var updateControlValue = useExhaustiveCallback(function (id, value) {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        setControls(function (prev) {
            var _a;
            return (__assign(__assign({}, prev), (_a = {}, _a[id] = __assign(__assign({}, prev[id]), { value: value }), _a)));
        });
    }, []);
    var createControl = useExhaustiveCallback(function (id, control) {
        setControls(function (prev) {
            var _a;
            return (__assign(__assign({}, prev), (_a = {}, _a[id] = control, _a)));
        });
    }, []);
    var deleteControl = useExhaustiveCallback(function (id) {
        setControls(function (prev) {
            var updated = __assign({}, prev);
            delete updated[id];
            return updated;
        });
    }, []);
    return (_jsx(ControlsContext.Provider, __assign({ value: { createControl: createControl, updateControlValue: updateControlValue, deleteControl: deleteControl, controls: controls } }, { children: _jsx(StoryboxWindow, { stories: stories }) })));
};
