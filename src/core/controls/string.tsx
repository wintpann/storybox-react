import React, { ChangeEventHandler, FC } from 'react';
import { StringControl } from '../type';

export const RenderStringControl: FC<StringControl> = ({
    name,
    value,
    setValue,
    minLength,
    maxLength,
}) => {
    const onChange: ChangeEventHandler<HTMLTextAreaElement> = (e) => {
        const updated: string = e.target.value;
        if (maxLength && updated.length > maxLength) return;
        if (minLength && updated.length < minLength) return;

        setValue(updated);
    };

    return (
        <div className="storybox-control">
            <div className="storybox-text storybox-control_label">{name}</div>
            <textarea className="storybox-textarea" value={value} onChange={onChange} />
        </div>
    );
};
