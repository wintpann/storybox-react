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
        <div className="">
            <div className="">{name}</div>
            <input className="" type="text" value={value} onChange={onChange} />
        </div>
    );
};
