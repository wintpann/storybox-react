import React, { FC } from 'react';
import {
    useBooleanControl,
    useButtonControl,
    useCheckboxControl,
    useNumberControl,
    useRadioControl,
    useStringControl,
} from '../core';

const checkboxDefaults = ['green'];

export const Example: FC = () => {
    const [washRegexEnabled] = useBooleanControl({
        name: 'string wash regex enabled (/\\D/g)',
        defaultValue: false,
    });

    const [stringControl] = useStringControl({
        defaultValue: 'John',
        name: 'String control',
        minLength: 0,
        maxLength: 1000,
        washRegex: washRegexEnabled ? /\D/g : undefined,
    });

    const [numberControl] = useNumberControl({
        defaultValue: 3,
        name: 'Number control',
        max: 100,
        min: -5,
        step: 1,
        integerOnly: true,
    });

    const [numberRangeControl] = useNumberControl({
        defaultValue: 3,
        name: 'Number range control',
        max: 100,
        min: -5,
        step: 1,
        integerOnly: true,
        appearance: 'range',
    });

    const [timesClicked] = useButtonControl({
        name: 'Times clicked',
    });

    const [radioControl] = useRadioControl({
        name: 'Radio control',
        options: ['true', 'false'],
        defaultValue: 'true',
    });

    const [checkboxControl] = useCheckboxControl({
        name: 'Checkbox control',
        options: ['green', 'blue', 'yellow'],
        defaultValue: checkboxDefaults,
    });

    const [booleanControl] = useBooleanControl({
        name: 'Boolean control',
        defaultValue: true,
    });

    return (
        <div>
            <div>Mock story</div>
            <br />
            <div>boolean control: {booleanControl ? 'true' : 'false'}</div>
            <div>
                string control {washRegexEnabled ? `(wash regex /\\D/g enabled)` : ''}:{' '}
                {stringControl}
            </div>
            <div>number control: {numberControl}</div>
            <div>number range control: {numberRangeControl}</div>
            <div>button control (times clicked): {timesClicked}</div>
            <div>radio control: {radioControl}</div>
            <div>checkbox control: {checkboxControl.join(', ')}</div>
        </div>
    );
};
