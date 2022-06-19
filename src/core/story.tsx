import React, { createContext, FC, ReactNode, useContext } from 'react';
import { ControlsContextType } from './type';
import { noop, useNode } from './utils';
import { RenderControl } from './controls';

export const ControlsContext = createContext<ControlsContextType>({
    controls: {},
    updateControlValue: noop,
    deleteControl: noop,
    createControl: noop,
});

export const StoryBox: FC<{
    children: ReactNode | ((parent: HTMLElement) => void);
}> = ({ children }) => {
    const { controls } = useContext(ControlsContext);
    const [node, setNode] = useNode();

    const childrenFunction = typeof children === 'function' && node ? children(node) : null;
    const childrenContent = typeof children !== 'function' ? children : null;

    return (
        <div className="storybox-story">
            <div className="storybox-story_controls-window">
                {Object.entries(controls).map(([id, control]) => (
                    <RenderControl key={id} control={control} />
                ))}
            </div>
            <div className="storybox-story_children" ref={setNode}>
                {childrenContent}
                {childrenFunction}
            </div>
        </div>
    );
};
