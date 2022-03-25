import { yupResolver } from '@hookform/resolvers/yup';
import React from 'react';
import { useForm } from 'react-hook-form';
import { Alert, Text, TouchableOpacity, View } from "react-native";
import * as yup from 'yup';
import { ControlledInput } from '../../components/ControlledInput';
import { theme } from '../../global';
import { ss } from './styles';

type FormData = {
    name: string;
    email: string;
    password: string;
    password_confirm: string;
    company_name: string;
}

const schema = yup.object({
    name: yup.string().required("Tell us your name"),
    email: yup.string().email().required("We need your email"),
    password: yup.string().min(6, "Password must have at least 6 characters").required("Required"),
    password_confirm: yup.string().oneOf([yup.ref("password"), null], "Passwords do not match"),
    // company_name: yup.string().required("We really need this information")
    company_name: yup.string()
});

export function Form() {

    const { control, handleSubmit, formState: { errors } } = useForm<FormData>({
        resolver: yupResolver(schema)
    });

    function handleContinue(data: FormData) {
        Alert.alert("You are ready to Go!", "Thank you for signin up.");
    }

    return (
        <View style={ss.container}>

            <View style={ss.headerContainer}>
                <Text style={ss.title}>Set up your account</Text>
                <Text style={ss.description}>{`You have been invited to join us :)`}</Text>
            </View>

            <View>
                <ControlledInput placeholder='Name' autoCapitalize='words' name='name' error={errors.name} control={control} />
                <View style={{ height: 20 }} />
                <ControlledInput placeholder='Email' autoCapitalize='none' keyboardType='email-address' name='email' error={errors.email} control={control} />
                <View style={{ height: 20 }} />
                <ControlledInput placeholder='Password' autoCapitalize='none' secureTextEntry name='password' error={errors.password} control={control} />
                <View style={{ height: 20 }} />
                <ControlledInput placeholder='Confirm Password' autoCapitalize='none' secureTextEntry name='password_confirm' error={errors.password_confirm} control={control} />
                <View style={{ height: 20 }} />
                <ControlledInput placeholder='Company Name' name='company_name' error={errors.company_name} control={control} />
            </View>

            <TouchableOpacity style={ss.termsContainer}>
                <View style={ss.termButton} />
                <Text style={ss.termDescription}>I agree with the <Text style={{ color: theme.colors.link }}>Terms</Text></Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={handleSubmit(handleContinue)} style={ss.button}>
                <Text style={ss.buttonTitle}>Sign Up</Text>
            </TouchableOpacity>

        </View>
    )
}