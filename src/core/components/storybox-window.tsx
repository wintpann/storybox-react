import React, { FC, useRef, useState } from 'react';
import { ControlsWindow } from './controls-window';
import { ActiveStory } from './active-story';
import { WindowResizer } from './window-resizer';
import { MoveCallback, StartEndCallback } from '../hooks/use-drag';

export type StoryboxWindowProps = {
    stories: Record<string, FC>;
    defaultStoryKey?: string;
    onStoryKeyChange?: (key?: string) => void;
};

const dataRefInitial = {
    controlsWindowWidth: 500,
};

export const StoryboxWindow: FC<StoryboxWindowProps> = ({
    stories,
    defaultStoryKey,
    onStoryKeyChange,
}) => {
    const dataRef = useRef(dataRefInitial);
    const controlsWindowRef = useRef<HTMLDivElement>(null);
    const activeStoryRef = useRef<HTMLDivElement>(null);
    const firstStoryKey = () => defaultStoryKey ?? Object.entries(stories)[0][0] ?? '';
    const [activeStoryKey, setActiveStoryKey] = useState<string>(firstStoryKey);

    const onStartResize: StartEndCallback = () => {
        if (!controlsWindowRef.current) return;

        dataRef.current.controlsWindowWidth = controlsWindowRef.current.offsetWidth;
    };

    const onResize: MoveCallback = ([deltaX]) => {
        if (!controlsWindowRef.current) return;

        controlsWindowRef.current.style.flex = `0 0 ${
            dataRef.current.controlsWindowWidth + deltaX
        }px`;
    };
    return (
        <div className="storybox-container">
            <ControlsWindow
                containerRef={controlsWindowRef}
                activeStoryRef={activeStoryRef}
                storiesList={Object.entries(stories)}
                setActiveStoryKey={setActiveStoryKey}
                activeStoryKey={activeStoryKey}
                onStoryKeyChange={onStoryKeyChange}
            />
            <WindowResizer onMove={onResize} onStart={onStartResize} />
            <ActiveStory containerRef={activeStoryRef} Story={stories[activeStoryKey]} />
        </div>
    );
};
