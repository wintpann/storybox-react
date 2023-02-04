import React, { FC } from 'react';
import { StoryBox } from '../core';
import { Example } from './example-story';
import { Bullshit } from './bullshit-story';

const stories = {
    Example,
    Bullshit,
};

const decorator = (Story: FC) => () =>
    (
        <div
            style={{
                width: '100%',
                height: '100%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
            }}
        >
            <Story />
        </div>
    );

export const DemoApp = () => (
    <StoryBox
        stories={stories}
        onStoryKeyChange={(key) => console.log('story key changed', key)}
        decorator={decorator}
    />
);
