import { StyleSheet } from 'react-native';
import { theme } from '../../global';

export const ss = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme.colors.background,
        paddingVertical: "10%",
        paddingHorizontal: "8%"
    },
    headerContainer: {
        marginVertical: '15%'
    },
    title: {
        fontSize: 22,
        color: theme.colors.text1
    },
    description: {
        fontSize: 14,
        color: theme.colors.text2
    },
    termsContainer: {
        marginTop: 20,
        flexDirection: 'row',
        alignItems: 'center'
    },
    termButton: {
        height: 18,
        width: 18,
        borderWidth: 1,
        borderColor: theme.colors.text2,
        borderRadius: 3,
        marginRight: 7
    },
    termDescription: {
        fontSize: 14,
        color: theme.colors.text2
    },
    button: {
        marginTop: '20%',
        paddingHorizontal: 30,
        paddingVertical: 10,
        backgroundColor: theme.colors.primary,
        borderRadius: 5,
        alignSelf: 'flex-end'
    },
    buttonTitle: {
        fontSize: 16,
        color: theme.colors.background,
    }
});