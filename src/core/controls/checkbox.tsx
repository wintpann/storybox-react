import React, { ChangeEventHandler, FC } from 'react';
import { CheckboxControl } from '../type';

export const RenderCheckboxControl: FC<CheckboxControl> = ({ name, value, setValue, options }) => {
    const onChange: ChangeEventHandler<HTMLInputElement> = (e) => {
        const { checked } = e.target;

        if (checked) {
            setValue([...value, e.target.value]);
        } else {
            setValue(value.filter((item) => item !== e.target.value));
        }
    };

    return (
        <div className="">
            <div className="">{name}</div>
            <div className="">
                {options.map((option) => (
                    <label className="" key={option}>
                        <span className="">{option}</span>
                        <input
                            type="checkbox"
                            checked={value.includes(option)}
                            value={option}
                            onChange={onChange}
                        />
                    </label>
                ))}
            </div>
        </div>
    );
};
