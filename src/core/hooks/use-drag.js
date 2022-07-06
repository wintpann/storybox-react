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
import { useRef } from 'react';
import { useAction } from './use-action';
import { useExhaustiveEffect } from './use-exhaustive';
export var ButtonDragClicked;
(function (ButtonDragClicked) {
    ButtonDragClicked[ButtonDragClicked["PRIMARY"] = 0] = "PRIMARY";
    ButtonDragClicked[ButtonDragClicked["WHEEL"] = 1] = "WHEEL";
    ButtonDragClicked[ButtonDragClicked["SECONDARY"] = 2] = "SECONDARY";
})(ButtonDragClicked || (ButtonDragClicked = {}));
var initialState = {
    startX: 0,
    startY: 0,
    currX: 0,
    currY: 0,
    prevX: 0,
    prevY: 0,
    enabled: false,
};
var getDiff = function (state) { return [
    state.currX - state.startX,
    state.currY - state.startY,
]; };
export var useDragHandlers = function (_a) {
    var _b = _a.enabled, enabled = _b === void 0 ? true : _b, onMove = _a.onMove, onStartMove = _a.onStartMove, onEndMove = _a.onEndMove, getCursor = _a.getCursor, _c = _a.button, button = _c === void 0 ? ButtonDragClicked.PRIMARY : _c, _d = _a.stopPropagation, stopPropagation = _d === void 0 ? true : _d;
    var state = useRef(__assign({}, initialState));
    state.current.enabled = enabled;
    var onMouseMove = useAction(function (e) {
        state.current.prevY = state.current.currY;
        state.current.prevX = state.current.currX;
        state.current.currY = e.clientY;
        state.current.currX = e.clientX;
        onMove === null || onMove === void 0 ? void 0 : onMove(getDiff(state.current), e.target);
    });
    var onTouchMove = useAction(function (e) {
        state.current.prevY = state.current.currY;
        state.current.prevX = state.current.currX;
        state.current.currY = e.touches[0].clientY;
        state.current.currX = e.touches[0].clientX;
        onMove === null || onMove === void 0 ? void 0 : onMove(getDiff(state.current), e.target);
    });
    var onTouchEnd = useAction(function (e) {
        document.body.classList.remove('storybox-inherit-cursor');
        document.body.style.userSelect = 'auto';
        document.body.style.cursor = 'default';
        document.removeEventListener('touchmove', onTouchMove);
        document.removeEventListener('touchend', onTouchEnd);
        onEndMove === null || onEndMove === void 0 ? void 0 : onEndMove(e.target);
    });
    var onMouseUp = useAction(function (e) {
        document.body.classList.remove('storybox-inherit-cursor');
        document.body.style.userSelect = 'auto';
        document.body.style.cursor = 'default';
        document.removeEventListener('mousemove', onMouseMove);
        document.removeEventListener('mouseup', onMouseUp);
        onEndMove === null || onEndMove === void 0 ? void 0 : onEndMove(e.target);
    });
    var onMouseDown = useAction(function (e) {
        var _a;
        if (!state.current.enabled)
            return;
        var correctButtonClicked = e.button === button;
        if (correctButtonClicked) {
            if (stopPropagation)
                e.stopPropagation();
            state.current.startY = e.clientY;
            state.current.startX = e.clientX;
            onStartMove === null || onStartMove === void 0 ? void 0 : onStartMove(e.target);
            document.body.classList.add('storybox-inherit-cursor');
            document.body.style.userSelect = 'none';
            document.body.style.cursor = (_a = getCursor === null || getCursor === void 0 ? void 0 : getCursor(e.target)) !== null && _a !== void 0 ? _a : 'default';
            document.addEventListener('mousemove', onMouseMove);
            document.addEventListener('mouseup', onMouseUp);
        }
    });
    var onTouchStart = useAction(function (e) {
        var _a;
        if (!state.current.enabled)
            return;
        if (stopPropagation)
            e.stopPropagation();
        state.current.startY = e.touches[0].clientY;
        state.current.startX = e.touches[0].clientX;
        onStartMove === null || onStartMove === void 0 ? void 0 : onStartMove(e.target);
        document.body.classList.add('storybox-inherit-cursor');
        document.body.style.userSelect = 'none';
        document.body.style.cursor = (_a = getCursor === null || getCursor === void 0 ? void 0 : getCursor(e.target)) !== null && _a !== void 0 ? _a : 'default';
        document.addEventListener('touchmove', onTouchMove);
        document.addEventListener('touchend', onTouchEnd);
    });
    useExhaustiveEffect(function () { return function () {
        document.removeEventListener('mousemove', onMouseMove);
        document.removeEventListener('mouseup', onMouseUp);
        document.removeEventListener('touchmove', onTouchMove);
        document.removeEventListener('touchend', onTouchEnd);
    }; }, []);
    return { onMouseDown: onMouseDown, onTouchStart: onTouchStart };
};
