import React, { ErrorInfo, FC, PureComponent } from 'react';

type ErrorScreenProps = { error: Error; tryAgain: () => void; storyKey: string };

const ErrorScreen: FC<ErrorScreenProps> = ({ error, tryAgain, storyKey }) => (
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

export class ErrorBoundary extends PureComponent<
    { Story?: FC; storyKey: string },
    { error: Error | null; key: string }
> {
    state = {
        error: null,
        key: '',
    };

    componentDidCatch(error: Error, errorInfo: ErrorInfo) {
        this.setState({ error, key: this.props.storyKey });
        console.error('[STORYBOX ERROR]', error, errorInfo);
    }

    tryAgain = () => {
        this.setState({ error: null });
    };

    render() {
        const { Story } = this.props;
        const { error, key } = this.state;

        if (error) return <ErrorScreen error={error} storyKey={key} tryAgain={this.tryAgain} />;

        return <>{Story && <Story />}</>;
    }
}
