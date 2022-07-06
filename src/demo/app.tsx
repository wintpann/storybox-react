import React from 'react';
import { StoryContainer } from '../core/components/story-container';
import { Example } from './example';

const stories = {
    Example,
};

export const DemoApp = () => <StoryContainer stories={stories} />;
