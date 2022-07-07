import React from 'react';
import {
    StoryBox,
    useBooleanControl,
    useButtonControl,
    useCheckboxControl,
    useNumberControl,
    useRadioControl,
    useStringControl,
} from 'storybox-react';

const checkboxDefaults = ['green'];

export const OtherComponentStory = () => {
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
            <div>boolean control current value: {booleanControl ? 'true' : 'false'}</div>
            <div>string control current value: {stringControl}</div>
            <div>number control current value: {numberControl}</div>
            <div>number range control current value: {numberRangeControl}</div>
            <div>button control (times clicked) current value: {timesClicked}</div>
            <div>radio control current value: {radioControl}</div>
            <div>checkbox control current value: {checkboxControl.join(', ')}</div>
        </StoryBox>
    );
};