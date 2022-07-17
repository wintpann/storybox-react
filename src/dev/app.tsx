import React from 'react';
import { StoryBox } from '../core';
import { Example } from './example';

const stories = {
    Example,
};

export const DemoApp = () => <StoryBox stories={stories} />;
