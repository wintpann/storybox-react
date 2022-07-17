import React from 'react';
import ReactDOM from 'react-dom/client';
import 'storybox-react/dist/styles.css'; // import storybox specific styles
import 'bootstrap/dist/css/bootstrap.min.css'; // import bootstrat styles since we use bootstrap components for the demo
import { StoryContainer } from 'storybox-react';
import { stories } from '../stories';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<StoryContainer stories={stories} />);
