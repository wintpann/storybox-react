import { useRef } from 'react';
// eslint-disable-next-line @typescript-eslint/ban-types
export var useAction = function (actual) {
    var actionRef = useRef({
        actual: actual,
        memoized: function () {
            var _a;
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            return (_a = actionRef.current).actual.apply(_a, args);
        },
    });
    actionRef.current.actual = actual;
    return actionRef.current.memoized;
};
