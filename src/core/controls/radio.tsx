import React, { ChangeEventHandler, FC } from 'react';
import { RadioControl } from '../type';

export const RenderRadioControl: FC<RadioControl> = ({ name, value, setValue, options }) => {
    const onChange: ChangeEventHandler<HTMLInputElement> = (e) => setValue(e.target.value);

    return (
        <div className="">
            <div className="">{name}</div>
            <div className="">
                {options.map((option) => (
                    <label className="" key={option}>
                        <span className="">{option}</span>
                        <input
                            type="radio"
                            checked={option === value}
                            value={option}
                            onChange={onChange}
                        />
                    </label>
                ))}
            </div>
        </div>
    );
};
