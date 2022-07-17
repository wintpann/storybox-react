import React from 'react';
import 'storybox-react/dist/styles.css'; // import storybox specific styles
import 'bootstrap/dist/css/bootstrap.min.css'; // import bootstrat styles since we use bootstrap components for the demo
import { StoryBox } from 'storybox-react';
import { stories } from '../stories';

export const StoryboxPage = () => <StoryBox stories={stories} />