import React, { ChangeEventHandler, FC } from 'react';
import { BooleanControl } from '../type';

export const RenderBooleanControl: FC<BooleanControl> = ({ name, value, setValue }) => {
    const onChange: ChangeEventHandler<HTMLInputElement> = (e) => setValue(e.target.checked);

    return (
        <div className="">
            <div className="">{name}</div>
            <div className="">
                <label className="">
                    <span className="">{value ? 'true' : 'false'}</span>
                    <input type="checkbox" checked={value} onChange={onChange} />
                </label>
            </div>
        </div>
    );
};
