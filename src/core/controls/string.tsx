import React, { ChangeEventHandler, FC } from 'react';
import { StringControl } from '../type';

export const RenderStringControl: FC<StringControl> = ({
    name,
    value,
    setValue,
    minLength,
    maxLength,
}) => {
    const onChange: ChangeEventHandler<HTMLInputElement> = (e) => {
        const updated: string = e.target.value;
        if (maxLength && updated.length > maxLength) return;
        if (minLength && updated.length < minLength) return;

        setValue(updated);
    };

    return (
        <div className="storybox-control-common_wrapper">
            <div className="storybox-control-common_label">{name}</div>
            <input
                className="storybox-control-string_input"
                type="text"
                value={value}
                onChange={onChange}
            />
        </div>
    );
};
