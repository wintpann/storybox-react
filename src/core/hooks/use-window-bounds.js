import { useAction } from './use-action';
import { useExhaustiveLayoutEffect } from './use-exhaustive';
export var useWindowBounds = function (callback) {
    var handleResize = useAction(function () {
        callback({ width: window.innerWidth, height: window.innerHeight });
    });
    useExhaustiveLayoutEffect(function () {
        callback({ width: window.innerWidth, height: window.innerHeight });
        window.addEventListener('resize', handleResize);
        return function () { return window.removeEventListener('resize', handleResize); };
    }, []);
};
