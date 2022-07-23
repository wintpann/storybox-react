export const uid = (() => {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    const charactersLength = characters.length;

    return (length = 20) => {
        let result = '';
        for (let i = 0; i < length; i++) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return result;
    };
})();

export const noop = () => null;

export class Subject<T> {
    subscribers: Array<(value: T) => void> = [];

    value: T;

    constructor(value: T) {
        this.value = value;
    }

    next = (value: T) => {
        this.value = value;
        this.subscribers.forEach((sub) => sub(value));
    };

    subscribe = (callback: (value: T) => void) => {
        this.subscribers.push(callback);
        return () => {
            this.subscribers.splice(this.subscribers.indexOf(callback), 1);
        };
    };

    getState = () => this.value;
}

export const pick = <T>(object: T, keys: string[]): Partial<T> =>
    keys
        .filter((key) => key in object)
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        .reduce((result, key) => ({ ...result, [key]: object[key] }), {});

export const invariant = (() => {
    let called = false;
    return (withinContext: boolean) => {
        if (!called && !withinContext) {
            console.error(
                `[Storybox]: Component with usage of any control hook should not be rendered on its own since it's useless. Place it in *stories* prop of <StoryBox/> component`,
            );
            called = true;
        }
    };
})();
