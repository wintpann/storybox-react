import React, { createContext, FC, ReactNode, useContext } from 'react';
import { Control, ControlsContextType } from './type';
import { noop, Subject, useNode, useSubjectValue } from './utils';
import { RenderControl } from './controls';

export const ControlsContext = createContext<ControlsContextType>({
    controls: new Subject<Record<string, Control>>({}),
    updateControlValue: noop,
    deleteControl: noop,
    createControl: noop,
});

export const StoryBox: FC<{
    children: ReactNode | ((parent: HTMLElement) => void);
}> = ({ children }) => {
    const { controls: controlsSubject } = useContext(ControlsContext);
    const controls = useSubjectValue(controlsSubject);
    const [node, setNode] = useNode();

    const childrenFunction = typeof children === 'function' && node ? children(node) : null;
    const childrenContent = typeof children !== 'function' ? children : null;

    return (
        <div className="storybox-story">
            <div className="storybox-story_controls-window storybox-scroll">
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
