import React, { useEffect } from 'react';
import { Text, StyleSheet, View, ActivityIndicator } from 'react-native';
import { color } from 'react-native-reanimated';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';



export default () => {

    const navigation = useNavigation();

    useEffect(() => {
        const checkToken = async () => {
            const token = await AsyncStorage.getItem('token');
            if (token) {

            } else {
                navigation.navigate('SignIn');

            }
        }
        checkToken();
    }, []);

    return (
        <View style={page.container}>
            <Text style={page.text}>EMPRESA-X</Text>
            <ActivityIndicator size="large" color="#fff" />
        </View>


    );
}
const page = StyleSheet.create({
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
