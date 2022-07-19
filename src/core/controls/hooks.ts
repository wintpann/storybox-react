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
import { pick, uid } from '../utils';
import { ControlsContext } from '../context';
import { useExhaustiveEffect } from '../hooks/use-exhaustive';

const createGenericControlHook = <T extends Control>(
    type: T['type'],
    updateOnChange: Array<keyof Omit<T, '' | 'type' | 'id' | 'value' | 'setValue'>> = [],
): UseControl<T> => {
    const useGenericControl: UseControl<T> = (control) => {
        const { deleteControl, createControl, updateControl } = useContext(ControlsContext);
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
            const id = uid();
            idRef.current = id;
            createControl(id, { ...control, type, value, setValue, id } as T);
            return () => deleteControl(id);
        }, []);

        return [value, setValue];
    };

    return useGenericControl;
};

export const useBooleanControl = createGenericControlHook<BooleanControl>('boolean');

export const useStringControl = createGenericControlHook<StringControl>('string', [
    'maxLength',
    'minLength',
    'washRegex',
]);

export const useNumberControl = createGenericControlHook<NumberControl>('number', ['min', 'max']);

export const useRadioControl = createGenericControlHook<RadioControl>('radio');

export const useCheckboxControl = createGenericControlHook<CheckboxControl>('checkbox');

export const useButtonControl: UseControl<ButtonControl, 'defaultValue'> = (control) => {
    const { deleteControl, createControl, updateControl } = useContext(ControlsContext);
    const [value, setValue] = useState(0);
    const idRef = useRef<string>();

    useExhaustiveEffect(() => {
        if (idRef.current) {
            updateControl(idRef.current, { value });
            control.onClick?.();
        }
    }, [value]);

    useExhaustiveEffect(() => {
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
