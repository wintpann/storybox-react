import React, { FC, useState } from 'react';
import { Bounds } from '../hooks/use-bounds';
import { WindowBounds } from '../hooks/use-window-bounds';

export type ControlsCommonProps = {
    activeStoryBounds?: Bounds;
    windowBounds?: WindowBounds;
    storiesList: Array<[string, FC]>;
    setActiveStoryKey: (key: string) => void;
    activeStoryKey: string;
};

export const ControlsCommon: FC<ControlsCommonProps> = ({
    activeStoryBounds,
    windowBounds,
    storiesList,
    setActiveStoryKey,
    activeStoryKey,
}) => {
    const [searchText, setSearchText] = useState('');
    const storiesMatched = storiesList.filter(([key]) =>
        key.toLowerCase().includes(searchText.toLowerCase()),
    );
    return (
        <div className="storybox-controls-common">
            <a
                href="https://www.npmjs.com/package/storybox-react"
                className="storybox-controls-common_logo"
                target="_blank"
                rel="noreferrer"
            >
                storybox npm
            </a>
            <div className="storybox-controls-common_bounds">
                <div>
                    Window: {windowBounds?.width}&nbsp;x&nbsp;{windowBounds?.height}
                </div>
                <div>
                    Story: {activeStoryBounds?.width}&nbsp;x&nbsp;{activeStoryBounds?.height}
                </div>
            </div>
            <div className="storybox-controls-common_story-picker">
                <div className="storybox-controls-common_story-search">
                    <span>Search:</span>
                    <input
                        type="text"
                        value={searchText}
                        onChange={(e) => setSearchText(e.target.value)}
                    />
                </div>
                <div className="storybox-controls-common_story-picker-name" title="selected story">
                    {`< ${activeStoryKey || 'No story selected'} >`}
                </div>
            </div>
            <div className="storybox-controls-common_stories-list storybox-scroll">
                {storiesMatched.map(([key]) => (
                    <div
                        onClick={() => {
                            if (key === activeStoryKey) {
                                setActiveStoryKey('');
                            } else {
                                setActiveStoryKey(key);
                            }
                        }}
                        className="storybox-controls-common_stories-list-item"
                        key={key}
                        style={{ background: key === activeStoryKey ? '#355c88' : undefined }}
                    >
                        {key}
                    </div>
                ))}
                {storiesMatched.length === 0 && <span>No stories found</span>}
            </div>
        </div>
    );
};
