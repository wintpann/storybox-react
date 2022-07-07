import React from 'react';
import ReactDOM from 'react-dom/client';
import 'storybox-react/dist/styles.css';
import { StoryContainer } from 'storybox-react';
import { ButtonStory } from '../stories/button.story';
import { OtherComponentStory } from '../stories/other-component';

const stories = { ButtonStory, OtherComponentStory };

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<StoryContainer stories={stories} />);
