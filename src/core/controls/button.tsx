import React, { FC } from 'react';
import { ButtonControl } from '../type';

export const RenderButtonControl: FC<ButtonControl> = ({ name, value, setValue }) => {
    const onChange = () => setValue(value + 1);

    return (
        <div className="storybox-control-common_wrapper">
            <div className="storybox-control-common_label">{name}</div>
            <button type="button" className="storybox-control-button" onClick={onChange}>
                Click!
            </button>
        </div>
    );
};
