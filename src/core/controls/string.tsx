import React, { ChangeEventHandler, FC } from 'react';
import { StringControl } from '../type';

const getTitle = (min: number | undefined, max: number | undefined) => {
    const title = [];
    if (min) title.push(`min length: ${min}`);
    if (max) title.push(`max length: ${max}`);
    return title.join(', ');
};

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
                title={getTitle(minLength, maxLength)}
            />
        </div>
    );
};
