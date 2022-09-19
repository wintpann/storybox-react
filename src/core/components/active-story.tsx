import React, { FC, RefObject } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { ErrorScreen } from './error-screen';

export type ActiveStoryProps = {
    containerRef: RefObject<HTMLDivElement>;
    Story?: FC;
};

export const ActiveStory: FC<ActiveStoryProps> = ({ containerRef, Story }) => (
    <div className="storybox-active-story" ref={containerRef}>
        <ErrorBoundary
            fallbackRender={({ error, resetErrorBoundary }) => (
                <ErrorScreen error={error} tryAgain={resetErrorBoundary} />
            )}
        >
            {Story && <Story />}
        </ErrorBoundary>
    </div>
);
