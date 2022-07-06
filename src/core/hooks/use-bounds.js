import { useResizeObserver } from './use-resize-observer';
import { useAction } from './use-action';
import { useExhaustiveLayoutEffect } from './use-exhaustive';
export var useBounds = function (ref, callback) {
    var actionCallback = useAction(callback);
    var handleResize = useAction(function (entry) {
        actionCallback(entry.contentRect);
    });
    useExhaustiveLayoutEffect(function () {
        if (ref.current) {
            actionCallback(ref.current.getBoundingClientRect());
        }
    }, [ref]);
    useResizeObserver(handleResize, ref);
};
