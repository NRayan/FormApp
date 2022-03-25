import { StyleSheet } from 'react-native'
import { theme } from '../../global'

export const ss = StyleSheet.create({
    container: {
        width: '100%'
    },
    input: {
        borderColor: theme.colors.text3,
        borderWidth: .3,
        borderRadius: 5,
        paddingHorizontal: 10,
        height: 45,
        color: theme.colors.text1,
    }
})