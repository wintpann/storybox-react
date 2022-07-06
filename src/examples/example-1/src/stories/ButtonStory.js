import { StoryBox, useBooleanControl, useStringControl } from 'storybox-react';
import { Button } from '../components/Button';

export const ButtonStory = () => {
    const [text] = useStringControl({
        maxLength: 100,
        minLength: 0,
        name: 'text',
        defaultValue: 'My button',
    });
    const [disabled] = useBooleanControl({ name: 'disabled', defaultValue: false });

    return (
        <StoryBox>
            <Button text={text} disabled={disabled} />
        </StoryBox>
    );
};
