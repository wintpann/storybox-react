import React, { FC } from 'react';
import { ButtonControl } from '../type';

export const RenderButtonControl: FC<ButtonControl> = ({ name, value, setValue }) => {
    const onChange = () => setValue(value + 1);

    return (
        <div className="">
            <div className="">{name}</div>
            <button type="button" className="" onClick={onChange}>
                Click!
            </button>
        </div>
    );
};
