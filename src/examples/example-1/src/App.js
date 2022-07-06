import 'storybox-react/dist/styles.css';
import { StoryContainer } from 'storybox-react';
import { ButtonStory } from './stories/ButtonStory';
import { OtherComponentStory } from './stories/OtherComponentStory';

const stories = { ButtonStory, OtherComponentStory };

export const App = () => <StoryContainer stories={stories} />;
