import React, { FC } from 'react';
import {
    useBooleanControl,
    useButtonControl,
    useCheckboxControl,
    useNumberControl,
    useRadioControl,
    useStringControl,
} from '../core/controls/hooks';
import { StoryBox } from '../core/components/story';

const checkboxDefaults = ['green'];

export const Example: FC = () => {
    const [stringControl] = useStringControl({
        defaultValue: 'John',
        name: 'String control',
        minLength: 0,
        maxLength: 1000,
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
        <StoryBox>
            <div>Mock story</div>
            <br />
            <div>boolean control: {booleanControl ? 'true' : 'false'}</div>
            <div>string control: {stringControl}</div>
            <div>number control: {numberControl}</div>
            <div>number range control: {numberRangeControl}</div>
            <div>button control (times clicked): {timesClicked}</div>
            <div>radio control: {radioControl}</div>
            <div>checkbox control: {checkboxControl.join(', ')}</div>
        </StoryBox>
    );
};
