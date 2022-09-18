import { useContext, useState, useRef } from 'react';
import {
    BooleanControl,
    ButtonControl,
    CheckboxControl,
    Control,
    NumberControl,
    RadioControl,
    StringControl,
    UseControl,
} from '../type';
import { invariant, pick, uid } from '../utils';
import { ControlsContext } from '../context';
import { useExhaustiveEffect } from '../hooks/use-exhaustive';

const createGenericControlHook = <T extends Control>(
    type: T['type'],
    updateOnChange: Array<keyof Omit<T, '' | 'type' | 'id' | 'value' | 'setValue'>> = [],
): UseControl<T> => {
    const useGenericControl: UseControl<T> = (control) => {
        const { deleteControl, createControl, updateControl, withinContext } =
            useContext(ControlsContext);
        const [value, setValue] = useState(control.defaultValue);
        const idRef = useRef<string>();

        useExhaustiveEffect(() => {
            if (idRef.current) updateControl(idRef.current, { value });
        }, [value]);

        useExhaustiveEffect(
            () => {
                if (idRef.current) {
                    updateControl(
                        idRef.current,
                        pick(control as unknown as T, updateOnChange as string[]),
                    );
                }
            },
            updateOnChange.map((key) => control[key]),
        );

        useExhaustiveEffect(() => {
            invariant(withinContext);
            const id = uid();
            idRef.current = id;
            createControl(id, { ...control, type, value, setValue, id } as T);
            return () => deleteControl(id);
        }, []);

        return [value, setValue];
    };

    return useGenericControl;
};

type UseBooleanControlParams = {
    /** name for control that will be displayed on the left panel */
    name: string;
    /** initial value */
    defaultValue: boolean;
};

type UseBooleanControlReturn = [
    /** current control value */
    boolean,
    /** handler for manually value updating */
    (newValue: boolean) => void,
];
export const useBooleanControl: (params: UseBooleanControlParams) => UseBooleanControlReturn =
    createGenericControlHook<BooleanControl>('boolean');

type UseStringControlParams = {
    /** name for control that will be displayed on the left panel */
    name: string;
    /** initial value */
    defaultValue: string;
    /** validating input for min length if passed */
    minLength?: number;
    /** validating input for max length if passed */
    maxLength?: number;
    /**
     * "washing" input with that regex if passed
     * @example
     * you need a string only with numbers and spaces.
     * so you create a regex that will match all EXCEPT numbers and spaces.
     * all matches will be removed
     * "a4 bcd 123".replace(/[^\s\d]/g, "") => "4  123"
     */
    washRegex?: RegExp;
};

type UseStringControlReturn = [
    string /** current control value */,
    (newValue: string) => void /** handler for manually value updating */,
];
export const useStringControl: (params: UseStringControlParams) => UseStringControlReturn =
    createGenericControlHook<StringControl>('string', ['maxLength', 'minLength', 'washRegex']);

type UseNumberControlParams = {
    /** name for control that will be displayed on the left panel */
    name: string;
    /** initial value */
    defaultValue: number;
    /** validating input for min if passed */
    min?: number;
    /** validating input for max if passed */
    max?: number;
    /** accepts only integer if passed
     * @default [integerOnly=false]
     */
    integerOnly?: boolean;
    /** plain input or range appearance on left panel
     * @default [appearance="input"]
     */
    appearance?: 'input' | 'range';
    /** step for changing values if you have chosen "range" appearance
     * @default [step=1]
     */
    step?: number;
};

type UseNumberControlReturn = [
    number /** current control value */,
    (newValue: number) => void /** handler for manually value updating */,
];
export const useNumberControl: (params: UseNumberControlParams) => UseNumberControlReturn =
    createGenericControlHook<NumberControl>('number', ['min', 'max']);

type UseRadioControlParams = {
    /** name for control that will be displayed on the left panel */
    name: string;
    /** initial value */
    defaultValue: string;
    /** options for radio group */
    options: string[];
};

type UseRadioControlReturn = [
    /** current control value */
    string,
    /** handler for manually value updating */
    (newValue: string) => void,
];
export const useRadioControl: (params: UseRadioControlParams) => UseRadioControlReturn =
    createGenericControlHook<RadioControl>('radio');

type UseCheckboxControlParams = {
    /** name for control that will be displayed on the left panel */
    name: string;
    /** initial value */
    defaultValue: string[];
    /** options for checkbox group */
    options: string[];
};

type UseCheckboxControlReturn = [
    /** current control value */
    string[],
    /** handler for manually value updating */
    (newValue: string[]) => void,
];
export const useCheckboxControl: (params: UseCheckboxControlParams) => UseCheckboxControlReturn =
    createGenericControlHook<CheckboxControl>('checkbox');

const createButtonControl = (): UseControl<ButtonControl, 'defaultValue'> => (control) => {
    const { deleteControl, createControl, updateControl, withinContext } =
        useContext(ControlsContext);
    const [value, setValue] = useState(0);
    const idRef = useRef<string>();

    useExhaustiveEffect(() => {
        if (idRef.current) {
            updateControl(idRef.current, { value });
            control.onClick?.();
        }
    }, [value]);

    useExhaustiveEffect(() => {
        invariant(withinContext);
        const id = uid();
        idRef.current = id;
        createControl(id, {
            ...control,
            type: 'button',
            value,
            setValue,
            defaultValue: 0,
            id,
        });
        return () => deleteControl(id);
    }, []);

    return [value, setValue];
};

type UseButtonControlParams = {
    /** name for control that will be displayed on the left panel */
    name: string;
    /** click handler */
    onClick?: () => void;
};

type UseButtonControlReturn = [
    /** counter: how many times the button has been clicked */
    number,
    /** update counter above */
    (newValue: number) => void,
];

export const useButtonControl: (params: UseButtonControlParams) => UseButtonControlReturn =
    createButtonControl();
