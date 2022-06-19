import React, { FC } from 'react';
import { Control, ControlsContextType } from './type';
import { ControlsContext } from './story';
import { useCreateSubject, useExhaustiveCallback } from './utils';
import './styles.scss';

export const StoryContainer: FC<{ Story: FC }> = ({ Story }) => {
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
        <div className="storybox-story-container">
            <ControlsContext.Provider
                value={{ createControl, updateControlValue, deleteControl, controls }}
            >
                <Story />
            </ControlsContext.Provider>
        </div>
    );
};
