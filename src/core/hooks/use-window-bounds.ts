import { useAction } from './use-action';
import { useExhaustiveLayoutEffect } from './use-exhaustive';

export type WindowBounds = Pick<DOMRectReadOnly, 'width' | 'height'>;

export const useWindowBounds = (callback: (bounds: WindowBounds) => void) => {
    const handleResize = useAction(() => {
        callback({ width: window.innerWidth, height: window.innerHeight });
    });

    useExhaustiveLayoutEffect(() => {
        callback({ width: window.innerWidth, height: window.innerHeight });
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);
};
