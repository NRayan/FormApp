import React from 'react';
import { TextInput, TextInputProps } from 'react-native';
import { theme } from '../../global';
import { ss } from './styles';

export type InputProps = TextInputProps & {

}

export function Input(props: InputProps) {

    return (
        <TextInput style={ss.input}
            placeholderTextColor={theme.colors.text3}
            selectionColor={theme.colors.text2}
            {...props} />
    )
}