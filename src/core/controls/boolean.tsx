import React, { ChangeEventHandler, FC } from 'react';
import { BooleanControl } from '../type';

export const RenderBooleanControl: FC<BooleanControl> = ({ name, value, setValue }) => {
    const onChange: ChangeEventHandler<HTMLInputElement> = (e) => setValue(e.target.checked);

    return (
        <div className="storybox-control">
            <div className="storybox-text storybox-control_label">{name}</div>
            <div className="">
                <label className="storybox-text">
                    <span className="storybox-text">{value ? 'true' : 'false'}</span>
                    <input type="checkbox" checked={value} onChange={onChange} />
                </label>
            </div>
        </div>
    );
};
