import React, { FC } from 'react';
import { Control, ControlsContextType } from '../type';
import { StoryboxWindow } from './storybox-window';
import { ControlsContext } from '../context';
import { useCreateSubject } from '../hooks/use-subject';
import { useExhaustiveCallback } from '../hooks/use-exhaustive';
import '../styles.scss';

export const StoryContainer: FC<{ stories: Record<string, FC> }> = ({ stories }) => {
    const [controls, setControls] = useCreateSubject<Record<string, Control>>({});

    const updateControlValue: ControlsContextType['updateControlValue'] = useExhaustiveCallback(
        (id, value) => {
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            setControls((prev) => ({ ...prev, [id]: { ...prev[id], value } }));
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
            value={{ createControl, updateControlValue, deleteControl, controls }}
        >
            <StoryboxWindow stories={stories} />
        </ControlsContext.Provider>
    );
};
