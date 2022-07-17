import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import 'storybox-react/dist/styles.css';
import { StoryContainer } from 'storybox-react';
import { ButtonStory } from '../stories/button.story';
import { OtherComponentStory } from '../stories/other-component';

const stories = { ButtonStory, OtherComponentStory };

export const Storybox = () => {
    const [authenticated, setAuthenticated] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const pass = prompt('pass? (123)');
        if (pass === '123') {
            setAuthenticated(true);
        } else {
            navigate('/');
        }
    }, []);

    return authenticated ? <StoryContainer stories={stories} /> : null;
};
