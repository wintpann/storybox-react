import React, { FC, RefObject } from 'react';

export type ActiveStoryProps = {
    containerRef: RefObject<HTMLDivElement>;
    Story?: FC;
};

export const ActiveStory: FC<ActiveStoryProps> = ({ containerRef, Story }) => (
    <div className="storybox-active-story" ref={containerRef}>
        {Story && <Story />}
    </div>
);
