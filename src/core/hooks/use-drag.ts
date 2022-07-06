import { CSSProperties, MouseEventHandler, RefObject, TouchEventHandler, useRef } from 'react';
import { useAction } from './use-action';
import { useExhaustiveEffect } from './use-exhaustive';

export enum ButtonDragClicked {
    PRIMARY = 0,
    WHEEL = 1,
    SECONDARY = 2,
}

export type MoveCallback = (diff: [number, number], target: HTMLElement) => void;
export type StartEndCallback = (target: HTMLElement) => void;
export type CursorGetter = (target: HTMLElement) => CSSProperties['cursor'];
export type DragProps = {
    ref: RefObject<HTMLElement>;
    enabled?: boolean;
    onMove?: MoveCallback;
    onStartMove?: StartEndCallback;
    onEndMove?: StartEndCallback;
    getCursor?: CursorGetter;
    button?: ButtonDragClicked;
    stopPropagation?: boolean;
};

const initialState = {
    startX: 0,
    startY: 0,
    currX: 0,
    currY: 0,
    prevX: 0,
    prevY: 0,
    enabled: false,
};

const getDiff = (state: typeof initialState): [number, number] => [
    state.currX - state.startX,
    state.currY - state.startY,
];

export const useDragHandlers = ({
    enabled = true,
    onMove,
    onStartMove,
    onEndMove,
    getCursor,
    button = ButtonDragClicked.PRIMARY,
    stopPropagation = true,
}: Omit<DragProps, 'ref'>) => {
    const state = useRef({ ...initialState });
    state.current.enabled = enabled;

    const onMouseMove = useAction((e: MouseEvent) => {
        state.current.prevY = state.current.currY;
        state.current.prevX = state.current.currX;

        state.current.currY = e.clientY;
        state.current.currX = e.clientX;
        onMove?.(getDiff(state.current), e.target as HTMLElement);
    });

    const onTouchMove = useAction((e: TouchEvent) => {
        state.current.prevY = state.current.currY;
        state.current.prevX = state.current.currX;

        state.current.currY = e.touches[0].clientY;
        state.current.currX = e.touches[0].clientX;
        onMove?.(getDiff(state.current), e.target as HTMLElement);
    });

    const onTouchEnd = useAction((e: TouchEvent) => {
        document.body.classList.remove('storybox-inherit-cursor');
        document.body.style.userSelect = 'auto';
        document.body.style.cursor = 'default';
        document.removeEventListener('touchmove', onTouchMove);
        document.removeEventListener('touchend', onTouchEnd);
        onEndMove?.(e.target as HTMLElement);
    });

    const onMouseUp = useAction((e: MouseEvent) => {
        document.body.classList.remove('storybox-inherit-cursor');
        document.body.style.userSelect = 'auto';
        document.body.style.cursor = 'default';
        document.removeEventListener('mousemove', onMouseMove);
        document.removeEventListener('mouseup', onMouseUp);
        onEndMove?.(e.target as HTMLElement);
    });

    const onMouseDown: MouseEventHandler<HTMLElement> = useAction((e) => {
        if (!state.current.enabled) return;

        const correctButtonClicked = e.button === button;

        if (correctButtonClicked) {
            if (stopPropagation) e.stopPropagation();
            state.current.startY = e.clientY;
            state.current.startX = e.clientX;

            onStartMove?.(e.target as HTMLElement);
            document.body.classList.add('storybox-inherit-cursor');
            document.body.style.userSelect = 'none';
            document.body.style.cursor = getCursor?.(e.target as HTMLElement) ?? 'default';
            document.addEventListener('mousemove', onMouseMove);
            document.addEventListener('mouseup', onMouseUp);
        }
    });

    const onTouchStart: TouchEventHandler<HTMLElement> = useAction((e) => {
        if (!state.current.enabled) return;

        if (stopPropagation) e.stopPropagation();
        state.current.startY = e.touches[0].clientY;
        state.current.startX = e.touches[0].clientX;

        onStartMove?.(e.target as HTMLElement);
        document.body.classList.add('storybox-inherit-cursor');
        document.body.style.userSelect = 'none';
        document.body.style.cursor = getCursor?.(e.target as HTMLElement) ?? 'default';
        document.addEventListener('touchmove', onTouchMove);
        document.addEventListener('touchend', onTouchEnd);
    });

    useExhaustiveEffect(
        () => () => {
            document.removeEventListener('mousemove', onMouseMove);
            document.removeEventListener('mouseup', onMouseUp);

            document.removeEventListener('touchmove', onTouchMove);
            document.removeEventListener('touchend', onTouchEnd);
        },
        [],
    );

    return { onMouseDown, onTouchStart };
};
