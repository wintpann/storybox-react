import React, { ChangeEventHandler, FC } from 'react';
import { RadioControl } from '../type';

export const RenderRadioControl: FC<RadioControl> = ({ name, value, setValue, options }) => {
    const onChange: ChangeEventHandler<HTMLInputElement> = (e) => setValue(e.target.value);

    return (
        <div className="storybox-control-common_wrapper">
            <div className="storybox-control-common_label">{name}</div>
            <div className="storybox-control-radio_button-group">
                {options.map((option) => (
                    <label className="storybox-control-radio_button" key={option}>
                        <span className="storybox-control-radio_label">{option}</span>
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
