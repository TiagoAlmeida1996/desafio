import React, { useState } from 'react';
import { Text, StyleSheet, View, TextInput, Button, SafeAreaView } from 'react-native';
import FlatButton from './button';
import Api from '../../services/Api'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useNavigation } from '@react-navigation/core';

export default () => {
    const navigation = useNavigation();

    const [emailField, setEmailField] = useState('')
    const [passwordField, setPasswordField] = useState('')

    const handleSignClick = async () => {

        if (emailField != '' && passwordField != '') {
            const data = await Api.signIn(emailField, passwordField);
            console.log(data)
            if (data.accessToken) {
                await AsyncStorage.setItem('token', data.accessToken);
                navigation.reset({
                    routes: [{ name: 'MainTab' }]
                });
            } else {
                alert('Email ou password errados!')
            }
        } else {
            alert("Preencha os campos!")
        }
    }
    return (
        <View style={styles.container}>
            <Text style={styles.text}>EMPRESA-X</Text>
            <SafeAreaView >
                <TextInput
                    style={{ height: 40, width: 250, borderRadius: 20, backgroundColor: '#5f6277', textAlign: 'center', fontSize: 15, marginBottom: 20 }}
                    placeholder="Email"
                    placeholderTextColor="#767886"
                    value={emailField}
                    onChangeText={t => setEmailField(t)}

                />
                <TextInput
                    style={{ height: 40, width: 250, borderRadius: 20, backgroundColor: '#5f6277', textAlign: 'center', fontSize: 15, marginBottom: 20 }}
                    placeholder="Password"
                    placeholderTextColor="#767886"
                    secureTextEntry={true}
                    value={passwordField}
                    onChangeText={t => setPasswordField(t)}
                />
                <FlatButton text="Login" onPress={handleSignClick} />
            </SafeAreaView>
        </View>

    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#2a2e4a',
    },
    text: {
        fontSize: 50,
        marginBottom: '10%',
        color: '#fff'
    },



});


