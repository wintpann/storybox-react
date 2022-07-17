# storybook at minimums

![DEMO](https://raw.githubusercontent.com/wintpann/storybox-react/main/demo.gif)

The solution if you need some tool similar to storybook, but
* you don't want to set up build (from project to project it can be very hard to set up storybook). With storybox you can use same build config as you use in prod, since storybox doesn't care where you use it or how you build the project.
* you don't want so much features, that storybook offers (maybe you just need to have some simple "test page" with all custom components for your project)

### Usage examples
Clone this repo and go to examples directory.
* private-page is about when you want to place storybox in the same app, but within some private page. `npm start`
* separate-entry-point is about when you don't want to include storybox to your prod bundle, but instead, use separate entrypoint for storybox page (e.g. with react-app-rewired or craco) `npm run start:storybox`

### Usage

1. Define stories for each component you want. There are 7 types of controls available: boolean, checkbox, radio, button, number, range number, string. `OtherComponentStory` in example repos demonstrates all of them.
```jsx
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

```

3. Define a story container. Import stories and place it in stories prop. Render StoryBox somewhere in the app and that's it
```jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import 'storybox-react/dist/styles.css';
import { StoryBox } from 'storybox-react';
import { ButtonStory } from '../stories/button.story';
import { OtherComponentStory } from '../stories/other-component';

const stories = { ButtonStory, OtherComponentStory };

<StoryBox stories={stories} />

```