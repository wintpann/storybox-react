import React, { FC, useCallback, useState } from 'react';
import { ControlsContextType } from './type';
import { ControlsContext } from './story';
import './styles.scss';

export const StoryContainer: FC<{ Story: FC }> = ({ Story }) => {
    const [controls, setControls] = useState<ControlsContextType['controls']>({});
    const updateControlValue: ControlsContextType['updateControlValue'] = useCallback(
        (id, value) => {
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            setControls((prev) => ({ ...prev, [id]: { ...prev[id], value } }));
        },
        [],
    );

    const createControl: ControlsContextType['createControl'] = useCallback((id, control) => {
        setControls((prev) => ({ ...prev, [id]: control }));
    }, []);

    const deleteControl: ControlsContextType['deleteControl'] = useCallback((id) => {
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
