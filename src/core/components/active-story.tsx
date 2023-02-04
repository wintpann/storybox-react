import React, { FC, RefObject, useMemo } from 'react';
import classnames from 'classnames';
import { ErrorBoundary } from 'react-error-boundary';
import { ErrorScreen } from './error-screen';

export type ActiveStoryProps = {
    containerRef: RefObject<HTMLDivElement>;
    Story?: FC;
    noPointerEvents: boolean;
    decorator?: (Story: FC) => FC;
};

export const ActiveStory: FC<ActiveStoryProps> = ({
    containerRef,
    Story,
    noPointerEvents,
    decorator,
}) => {
    const Decorated = useMemo(
        () => (decorator && Story ? decorator(Story) : Story),
        [Story, decorator],
    );
    return (
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
                {Decorated ? <Decorated /> : null}
            </ErrorBoundary>
        </div>
    );
};
