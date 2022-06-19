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
        <div className="storybox-control">
            <div className="storybox-text storybox-control_label">{name}</div>
            <div className="">
                {options.map((option) => (
                    <label className="storybox-text" key={option}>
                        <span className="storybox-text">{option}</span>
                        <input
                            type="checkbox"
                            checked={value.includes(option)}
                            value={option}
                            onChange={onChange}
                            className="storybox-text"
                        />
                    </label>
                ))}
            </div>
        </div>
    );
};
