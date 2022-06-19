import React, { ChangeEventHandler, FC } from 'react';
import { RadioControl } from '../type';

export const RenderRadioControl: FC<RadioControl> = ({ name, value, setValue, options }) => {
    const onChange: ChangeEventHandler<HTMLInputElement> = (e) => setValue(e.target.value);

    return (
        <div className="storybox-control">
            <div className="storybox-text storybox-control_label">{name}</div>
            <div className="">
                {options.map((option) => (
                    <label className="storybox-text" key={option}>
                        <span className="">{option}</span>
                        <input
                            type="radio"
                            checked={option === value}
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
