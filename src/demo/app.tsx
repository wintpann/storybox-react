import React from 'react';
import { StoryContainer } from '../core/story-container';
import { ExampleStory } from './example-story';

export const DemoApp = () => (
    <div>
        <StoryContainer Story={ExampleStory} />
    </div>
);
