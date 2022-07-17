import Button from 'react-bootstrap/Button';

import { useBooleanControl, useRadioControl, useStringControl } from 'storybox-react';
import { DefaultStoryWrapper } from '../storybox/default-story-wrapper';
import { variants } from './common';

export const ButtonStory = () => {
    const [title] = useStringControl({
        defaultValue: 'Click',
        name: 'title',
        minLength: 0,
        maxLength: 30,
    });
    const [size] = useRadioControl({
        name: 'size',
        options: ['sm', 'lg'],
        defaultValue: 'lg',
    });
    const [variant] = useRadioControl({
        name: 'variant',
        options: variants,
        defaultValue: 'primary',
    });
    const [disabled] = useBooleanControl({
        name: 'disabled',
        defaultValue: false,
    });

    return (
        <DefaultStoryWrapper>
            <Button disabled={disabled} size={size} variant={variant}>
                {title}
            </Button>
        </DefaultStoryWrapper>
    );
};
