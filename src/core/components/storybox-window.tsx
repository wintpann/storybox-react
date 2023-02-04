import React, { FC, useCallback, useRef, useState } from 'react';
import { ControlsWindow } from './controls-window';
import { ActiveStory } from './active-story';
import { WindowResizer } from './window-resizer';
import { MoveCallback, StartEndCallback } from '../hooks/use-drag';
import { useDoubleKeypress } from '../hooks/use-double-keypress';

export type StoryboxWindowProps = {
    stories: Record<string, FC>;
    defaultStoryKey?: string;
    onStoryKeyChange?: (key?: string) => void;
    decorator?: (Story: FC) => FC;
};

const dataRefInitial = {
    controlsWindowWidth: 500,
};

export const StoryboxWindow: FC<StoryboxWindowProps> = ({
    stories,
    defaultStoryKey,
    onStoryKeyChange,
    decorator,
}) => {
    const dataRef = useRef(dataRefInitial);
    const controlsWindowRef = useRef<HTMLDivElement>(null);
    const activeStoryRef = useRef<HTMLDivElement>(null);
    const firstStoryKey = () => defaultStoryKey ?? Object.entries(stories)[0][0] ?? '';
    const [activeStoryKey, setActiveStoryKey] = useState<string>(firstStoryKey);
    const [noPointerEvents, setNoPointerEvents] = useState(false);
    const [panelShown, setPanelShown] = useState(true);

    const handleDoubleShift = useCallback(() => setPanelShown((prev) => !prev), []);

    useDoubleKeypress('Shift', handleDoubleShift);

    const onStartResize: StartEndCallback = () => {
        if (!controlsWindowRef.current) return;
        setNoPointerEvents(true);

        dataRef.current.controlsWindowWidth = controlsWindowRef.current.offsetWidth;
    };

    const onResize: MoveCallback = ([deltaX]) => {
        if (!controlsWindowRef.current) return;

        controlsWindowRef.current.style.flex = `0 0 ${
            dataRef.current.controlsWindowWidth + deltaX
        }px`;
    };

    const onEndResize = () => setNoPointerEvents(false);

    return (
        <div className="storybox-container">
            {panelShown && (
                <>
                    <ControlsWindow
                        containerRef={controlsWindowRef}
                        activeStoryRef={activeStoryRef}
                        storiesList={Object.entries(stories)}
                        setActiveStoryKey={setActiveStoryKey}
                        activeStoryKey={activeStoryKey}
                        onStoryKeyChange={onStoryKeyChange}
                    />
                    <WindowResizer onMove={onResize} onStart={onStartResize} onEnd={onEndResize} />
                </>
            )}
            <ActiveStory
                containerRef={activeStoryRef}
                Story={stories[activeStoryKey]}
                noPointerEvents={noPointerEvents}
                decorator={decorator}
            />
        </div>
    );
};
