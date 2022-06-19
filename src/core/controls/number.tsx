import React, { ChangeEventHandler, FC, KeyboardEventHandler, useState } from 'react';
import { NumberControl, PropMap } from '../type';

const appearanceMap: PropMap<Required<NumberControl>, 'appearance', string> = {
    input: 'text',
    range: 'range',
};

export const RenderNumberControl: FC<NumberControl> = ({
    name,
    value,
    setValue,
    min,
    max,
    step = 1,
    integerOnly,
    appearance = 'input',
}) => {
    const [localValue, setLocalValue] = useState(String(value));
    const [isValid, setIsValid] = useState(true);

    const validate = (num: number) => {
        if (Number.isNaN(num)) return false;
        if (max && num > max) return false;
        if (min && num < min) return false;
        if (integerOnly && !Number.isInteger(num)) return false;

        return true;
    };

    const onChange = (updated: number | string) => {
        const stringCasted = String(updated).replace(/[^0-9-.]/g, '');
        const numberCasted = integerOnly ? parseInt(stringCasted, 10) : parseFloat(stringCasted);

        setLocalValue(stringCasted);

        const valid = validate(numberCasted);
        setIsValid(valid);

        if (valid) {
            setValue(numberCasted);
        }
    };

    const onBlur = () => {
        const numberCasted = integerOnly ? parseInt(localValue, 10) : parseFloat(localValue);
        const localInvalid = !validate(numberCasted);

        if (localInvalid) {
            setLocalValue(String(value));
            setIsValid(true);
        }
    };

    const onInputChange: ChangeEventHandler<HTMLInputElement> = (e) => {
        onChange(e.target.value);
    };

    const onKeyDown: KeyboardEventHandler = (e) => {
        if (e.key === 'ArrowUp') {
            onChange(value + step);
        } else if (e.key === 'ArrowDown') {
            onChange(value - step);
        }
    };

    return (
        <div className="storybox-control">
            <div className="storybox-text storybox-control_label">{name}</div>
            <input
                className="storybox-input"
                type={appearanceMap[appearance]}
                step={step}
                value={localValue}
                onChange={onInputChange}
                onKeyDown={onKeyDown}
                onBlur={onBlur}
                min={min}
                max={max}
                style={{ boxShadow: !isValid ? '0 0 5px 2px red' : 'none' }}
            />
            {appearance === 'range' && (
                <div className="storybox-text storybox-control_range-outlet">{localValue}</div>
            )}
        </div>
    );
};
