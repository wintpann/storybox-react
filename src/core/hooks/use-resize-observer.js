import { useEffect, useRef } from 'react';
import { noop } from '../utils';
export var useResizeObserver = function (callback, ref) {
    var observerRef = useRef(null);
    useEffect(function () {
        if (!ref.current) {
            return noop;
        }
        observerRef.current = new ResizeObserver(function (entries) { return callback(entries[0]); });
        observerRef.current.observe(ref.current);
        return function () {
            var _a;
            (_a = observerRef.current) === null || _a === void 0 ? void 0 : _a.disconnect();
            observerRef.current = null;
        };
    }, [callback, ref]);
};
