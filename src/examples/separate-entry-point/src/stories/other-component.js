import React from 'react';
import {
    useBooleanControl,
    useButtonControl,
    useCheckboxControl,
    useNumberControl,
    useRadioControl,
    useStringControl,
} from 'storybox-react';
import { OtherComponent } from '../components/other-component';

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
        onClick: () => alert('oops, you clicked :)'),
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
            <div>Example other story</div>
            <br />
            <OtherComponent
                booleanControl={booleanControl}
                checkboxControl={checkboxControl}
                numberControl={numberControl}
                numberRangeControl={numberRangeControl}
                radioControl={radioControl}
                stringControl={stringControl}
                timesClicked={timesClicked}
            />
        </div>
    );
};
