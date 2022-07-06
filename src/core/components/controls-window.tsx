import React, { FC, RefObject, useContext, useState } from 'react';
import { ControlsCommon } from './controls-common';
import { Bounds, useBounds } from '../hooks/use-bounds';
import { useWindowBounds, WindowBounds } from '../hooks/use-window-bounds';
import { ControlsContext } from '../context';
import { useSubjectValue } from '../hooks/use-subject';
import { RenderControl } from '../controls';

export type ControlsWindowProps = {
    containerRef: RefObject<HTMLDivElement>;
    activeStoryRef: RefObject<HTMLDivElement>;
    storiesList: Array<[string, FC]>;
    setActiveStoryKey: (key: string) => void;
    activeStoryKey: string;
};

export const ControlsWindow: FC<ControlsWindowProps> = ({
    containerRef,
    activeStoryRef,
    storiesList,
    setActiveStoryKey,
    activeStoryKey,
}) => {
    const [activeStoryBounds, setActiveStoryBounds] = useState<Bounds | undefined>();
    const [windowBounds, setWindowBounds] = useState<WindowBounds | undefined>();
    const { controls: controlsSubject } = useContext(ControlsContext);
    const controls = useSubjectValue(controlsSubject);

    useBounds(activeStoryRef, setActiveStoryBounds);
    useWindowBounds(setWindowBounds);

    return (
        <div ref={containerRef} className="storybox-controls-window storybox-scroll">
            <ControlsCommon
                activeStoryBounds={activeStoryBounds}
                windowBounds={windowBounds}
                storiesList={storiesList}
                setActiveStoryKey={setActiveStoryKey}
                activeStoryKey={activeStoryKey}
            />
            <div className="storybox-controls-story">
                {Object.entries(controls).map(([id, control]) => (
                    <RenderControl key={id} control={control} />
                ))}
            </div>
        </div>
    );
};
