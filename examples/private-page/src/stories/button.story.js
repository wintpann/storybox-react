import { Button } from '../components/button';
import {
    useBooleanControl,
    useNumberControl,
    useRadioControl,
    useStringControl,
} from 'storybox-react';

export const ButtonStory = () => {
    const [children] = useStringControl({
        defaultValue: 'my button',
        name: 'children',
        minLength: 0,
        maxLength: 30,
    });
    const [padding] = useNumberControl({
        defaultValue: 10,
        name: 'padding',
        max: 100,
        min: 10,
        integerOnly: true,
        appearance: 'range',
    });
    const [type] = useRadioControl({
        name: 'type',
        options: ['primary', 'danger'],
        defaultValue: 'primary',
    });
    const [disabled] = useBooleanControl({
        name: 'disabled',
        defaultValue: false,
    });
    return <Button children={children} padding={padding} type={type} disabled={disabled} />;
};
