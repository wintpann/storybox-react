import React, { FC } from 'react';
import { MoveCallback, StartEndCallback, useDragHandlers } from '../hooks/use-drag';

const getResizeDragCursor = () => 'ew-resize';

export type WindowResizerProps = {
    onMove: MoveCallback;
    onStart: StartEndCallback;
    onEnd: StartEndCallback;
};

export const WindowResizer: FC<WindowResizerProps> = ({ onMove, onStart, onEnd }) => {
    const resizerHandlers = useDragHandlers({
        onMove,
        onStartMove: onStart,
        onEndMove: onEnd,
        getCursor: getResizeDragCursor,
    });

    return (
        <div className="storybox-window-resizer" {...resizerHandlers}>
            <div className="storybox-window-resizer_stick" />
        </div>
    );
};
