import React from 'react';

export const OtherComponent = ({
    booleanControl,
    stringControl,
    numberControl,
    numberRangeControl,
    timesClicked,
    radioControl,
    checkboxControl,
}) => (
    <div>
        <div>boolean value: {booleanControl ? 'true' : 'false'}</div>
        <div>string value: {stringControl}</div>
        <div>number value: {numberControl}</div>
        <div>number range value: {numberRangeControl}</div>
        <div>button (times clicked) value: {timesClicked}</div>
        <div>radio value: {radioControl}</div>
        <div>checkbox value: {checkboxControl.join(', ')}</div>
    </div>
);
