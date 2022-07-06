import React, { ChangeEventHandler, FC } from 'react';
import { BooleanControl } from '../type';

export const RenderBooleanControl: FC<BooleanControl> = ({ name, value, setValue }) => {
    const onChange: ChangeEventHandler<HTMLInputElement> = (e) => setValue(e.target.checked);

    return (
        <div className="storybox-control-common_wrapper">
            <div className="storybox-control-common_label">{name}</div>
            <div className="storybox-control-boolean_button-group">
                <label className="storybox-control-boolean_button">
                    <span className="storybox-control-boolean_label">
                        {value ? 'true' : 'false'}
                    </span>
                    <input type="checkbox" checked={value} onChange={onChange} />
                </label>
            </div>
        </div>
    );
};
