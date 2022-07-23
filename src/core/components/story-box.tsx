import React, { FC } from 'react';
import { Control, ControlsContextType } from '../type';
import { StoryboxWindow } from './storybox-window';
import { ControlsContext } from '../context';
import { useCreateSubject } from '../hooks/use-subject';
import { useExhaustiveCallback } from '../hooks/use-exhaustive';
import '../styles.scss';

export function StoryBox<T extends Record<string, FC> = Record<string, never>>({
    stories,
    defaultStoryKey,
}: {
    stories: T;
    defaultStoryKey?: keyof T;
}) {
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
            <StoryboxWindow stories={stories} defaultStoryKey={defaultStoryKey as string} />
        </ControlsContext.Provider>
    );
}
