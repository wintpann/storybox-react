import React, { FC, ReactNode } from 'react';
import { useNode } from '../hooks/use-node';

export const StoryBox: FC<{
    children: ReactNode | ((parent: HTMLElement) => void);
}> = ({ children }) => {
    const [node, setNode] = useNode();

    const childrenFunction = typeof children === 'function' && node ? children(node) : null;
    const childrenContent = typeof children !== 'function' ? children : null;

    return (
        <div className="storybox-active-story-content" ref={setNode}>
            {childrenContent}
            {childrenFunction}
        </div>
    );
};
