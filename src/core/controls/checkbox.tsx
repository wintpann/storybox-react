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
        <div className="storybox-control-common_wrapper">
            <div className="storybox-control-common_label">{name}</div>
            <div className="storybox-control-checkbox_button-group">
                {options.map((option) => (
                    <label className="storybox-control-checkbox_button" key={option}>
                        <span className="storybox-control-checkbox_label">{option}</span>
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
