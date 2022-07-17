import { Subject } from './utils';

export interface BaseControl<T> {
    id: string;
    type: string;
    name: string;
    defaultValue: T;
    value: T;
    setValue: (newValue: T) => void;
}

export interface BooleanControl extends BaseControl<boolean> {
    type: 'boolean';
}

export interface StringControl extends BaseControl<string> {
    type: 'string';
    maxLength?: number;
    minLength?: number;
}

export interface NumberControl extends BaseControl<number> {
    type: 'number';
    max?: number;
    min?: number;
    step?: number;
    integerOnly?: boolean;
    appearance?: 'input' | 'range';
}

export interface ButtonControl extends BaseControl<number> {
    type: 'button';
    onClick?: () => void;
}

export interface RadioControl extends BaseControl<string> {
    type: 'radio';
    options: string[];
}

export interface CheckboxControl extends BaseControl<string[]> {
    type: 'checkbox';
    options: string[];
}

export type Control =
    | StringControl
    | NumberControl
    | ButtonControl
    | RadioControl
    | CheckboxControl
    | BooleanControl;

export type UseControl<ControlType extends Control, OmitTypes extends string = ''> = (
    control: Omit<ControlType, 'type' | 'id' | 'value' | 'setValue' | OmitTypes>,
) => [ControlType['value'], ControlType['setValue']];

export type ControlsContextType = {
    controls: Subject<Record<string, Control>>;
    createControl: (id: string, control: Control) => void;
    updateControl: (id: string, partial: Partial<Control>) => void;
    deleteControl: (id: string) => void;
};

export type PropMap<Type extends Record<Key, any>, Key extends keyof Type, Value> = {
    [T in Type[Key]]: Value;
};
