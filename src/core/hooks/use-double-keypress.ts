import { useEffect } from 'react';

export const useDoubleKeypress = (key: string, handler: () => void, delta = 500) => {
    useEffect(() => {
        let prevTimePressed: null | number = null;

        const listener = (e: KeyboardEvent) => {
            const now = Date.now();

            const deltaTimePassed = prevTimePressed && now - prevTimePressed < delta;

            if (e.key === key && deltaTimePassed) {
                handler();
                prevTimePressed = null;
            } else {
                prevTimePressed = now;
            }
        };

        document.addEventListener('keydown', listener);

        return () => {
            prevTimePressed = null;
            document.removeEventListener('keydown', listener);
        };
    }, [handler, key, delta]);
};
