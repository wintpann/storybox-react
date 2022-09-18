import React, { FC } from 'react';

type ErrorScreenProps = { error: Error; tryAgain: () => void; storyKey: string };

export const ErrorScreen: FC<ErrorScreenProps> = ({ error, tryAgain, storyKey }) => (
    <div className="storybox-error">
        <h3 className="storybox-error_title">Oops, there was an error in your story: {storyKey}</h3>
        <span className="storybox-error_message">Message: {error.message}</span>
        <span className="storybox-error_tip">Check the console to see more</span>
        <button
            className="storybox-error_again storybox-control-button"
            onClick={tryAgain}
            type="button"
        >
            Try again
        </button>
    </div>
);
