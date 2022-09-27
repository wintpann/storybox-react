import React, { FC } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { Control, ControlsContextType } from '../type';
import { StoryboxWindow } from './storybox-window';
import { ControlsContext } from '../context';
import { useCreateSubject } from '../hooks/use-subject';
import { useExhaustiveCallback, useExhaustiveMemo } from '../hooks/use-exhaustive';
import { ErrorScreen } from './error-screen';
import '../styles.scss';

export function StoryBox<T extends Record<string, FC> = Record<string, never>>({
    stories,
    defaultStoryKey,
    onStoryKeyChange,
}: {
    stories: T;
    defaultStoryKey?: keyof T;
    onStoryKeyChange?: (key?: keyof T) => void;
}) {
    const decoratedWithBoundaryStories = useExhaustiveMemo<T>(() => {
        const result: Record<string, FC> = {};
        Object.entries(stories).forEach(([key, Story]) => {
            result[key] = () => (
                <ErrorBoundary
                    fallbackRender={({ error, resetErrorBoundary }) => (
                        <ErrorScreen error={error} tryAgain={resetErrorBoundary} storyKey={key} />
                    )}
                >
                    <Story />
                </ErrorBoundary>
            );
        });
        return result as T;
    }, []);

    const [controls, setControls] = useCreateSubject<Record<string, Control>>({});

    const updateControl: ControlsContextType['updateControl'] = useExhaustiveCallback(
        (id, partial) => {
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            setControls((prev) => ({ ...prev, [id]: { ...prev[id], ...partial } }));
        },
        [],
    );

    const createControl: ControlsContextType['createControl'] = useExhaustiveCallback(
        (id, control) => {
            setControls((prev) => ({ ...prev, [id]: control }));
        },
        [],
    );

    const deleteControl: ControlsContextType['deleteControl'] = useExhaustiveCallback((id) => {
        setControls((prev) => {
            const updated = { ...prev };
            delete updated[id];
            return updated;
        });
    }, []);

    return (
        <ControlsContext.Provider
            value={{ createControl, deleteControl, controls, updateControl, withinContext: true }}
        >
            <StoryboxWindow
                stories={decoratedWithBoundaryStories}
                defaultStoryKey={defaultStoryKey as string}
                onStoryKeyChange={onStoryKeyChange}
            />
        </ControlsContext.Provider>
    );
}
