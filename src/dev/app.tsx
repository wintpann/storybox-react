import React from 'react';
import { StoryBox } from '../core';
import { Example } from './example-story';
import { Bullshit } from './bullshit-story';

const stories = {
    Example,
    Bullshit,
};

export const DemoApp = () => (
    <StoryBox stories={stories} onStoryKeyChange={(key) => console.log('story key changed', key)} />
);
