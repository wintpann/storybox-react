import React, { FC, RefObject } from 'react';
import { ErrorBoundary } from './error-boundary';

export type ActiveStoryProps = {
    containerRef: RefObject<HTMLDivElement>;
    Story?: FC;
    storyKey: string;
};

export const ActiveStory: FC<ActiveStoryProps> = ({ containerRef, Story, storyKey }) => (
    <div className="storybox-active-story" ref={containerRef}>
        <ErrorBoundary Story={Story} storyKey={storyKey} />
    </div>
);
