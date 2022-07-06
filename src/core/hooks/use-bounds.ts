import { RefObject } from 'react';
import { ResizeCallback, useResizeObserver } from './use-resize-observer';
import { useAction } from './use-action';
import { useExhaustiveLayoutEffect } from './use-exhaustive';

export type Bounds = Omit<DOMRectReadOnly, 'toJSON'>;

export const useBounds = (ref: RefObject<HTMLElement>, callback: (bounds: Bounds) => void) => {
    const actionCallback = useAction(callback);

    const handleResize: ResizeCallback = useAction((entry) => {
        actionCallback(entry.contentRect);
    });

    useExhaustiveLayoutEffect(() => {
        if (ref.current) {
            actionCallback(ref.current.getBoundingClientRect());
        }
    }, [ref]);

    useResizeObserver(handleResize, ref);
};
