import Badge from 'react-bootstrap/Badge';
import { useButtonControl, useRadioControl } from 'storybox-react';
import { variants } from './common';
import { DefaultStoryWrapper } from '../storybox/default-story-wrapper';

export const BadgeStory = () => {
    const [variant] = useRadioControl({
        name: 'variant',
        options: variants,
        defaultValue: 'primary',
    });

    /**
     * First type of ButtonControl usage
     * const [timesClicked, setTimesClicked] = useButtonControl({ name: 'whatever' });
     */
    const [badgeCount, setBadgeCount] = useButtonControl({ name: 'count++' });
    /**
     * Second type of ButtonControl usage
     * with onClick handler
     */
    useButtonControl({ name: 'reset', onClick: () => setBadgeCount(0) });

    return (
        <DefaultStoryWrapper>
            <Badge bg={variant} pill>
                {badgeCount}
            </Badge>
        </DefaultStoryWrapper>
    );
};
