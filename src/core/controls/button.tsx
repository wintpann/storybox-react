import React, { FC } from 'react';
import { ButtonControl } from '../type';

export const RenderButtonControl: FC<ButtonControl> = ({ name, value, setValue }) => {
    const onChange = () => setValue(value + 1);

    return (
        <div className="storybox-control">
            <div className="storybox-text storybox-control_label">{name}</div>
            <button type="button" className="storybox-control_button" onClick={onChange}>
                Click!
            </button>
        </div>
    );
};
