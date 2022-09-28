import React, { FC, RefObject } from 'react';
import classnames from 'classnames';
import { ErrorBoundary } from 'react-error-boundary';
import { ErrorScreen } from './error-screen';

export type ActiveStoryProps = {
    containerRef: RefObject<HTMLDivElement>;
    Story?: FC;
    noPointerEvents: boolean;
};

export const ActiveStory: FC<ActiveStoryProps> = ({ containerRef, Story, noPointerEvents }) => (
    <div
        className={classnames({
            'storybox-active-story': true,
            'storybox-no-pointer-events': noPointerEvents,
        })}
        ref={containerRef}
    >
        <ErrorBoundary
            fallbackRender={({ error, resetErrorBoundary }) => (
                <ErrorScreen error={error} tryAgain={resetErrorBoundary} />
            )}
        >
            {Story ? <Story /> : null}
        </ErrorBoundary>
    </div>
);
