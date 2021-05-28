import React, { useState, useEffect } from 'react'
import { Alert } from 'react-native';
import { StyleSheet, View, Text, TouchableOpacity, SafeAreaView, TextInput } from 'react-native'
import { PaymentView } from '../components/PaymentView'
import FlatButton from '../SignIn/button';



export default () => {
    const [numberField, setNumberField] = useState('')
    const [nameField, setNameField] = useState('')
    const [monthield, setMonthield] = useState('')
    const [yearField, setYearField] = useState('')
    const [cvcField, setCvcField] = useState('')


    const handlePaymentClick = async () => {

        if (numberField != '' && nameField != '' && monthield != '' && yearField != '' && cvcField != '') {
            Alert('Pagamento efetuado com sucesso!!')
        } else {
            alert("Preencha os campos!")
        }
    }






    return (
        <View style={styles.container}>
            <Text style={styles.text}>Pagamento</Text>
            <SafeAreaView >
                <TextInput
                    style={{ height: 40, width: 250, borderRadius: 20, backgroundColor: '#5f6277', textAlign: 'center', fontSize: 15, marginBottom: 20 }}
                    placeholder="Numero Cartao"
                    placeholderTextColor="#767886"
                    keyboardType={'numeric'}
                    value={numberField}



                />
                <TextInput
                    style={{ height: 40, width: 250, borderRadius: 20, backgroundColor: '#5f6277', textAlign: 'center', fontSize: 15, marginBottom: 20 }}
                    placeholder="Nome"
                    placeholderTextColor="#767886"
                    value={nameField}




                />
                <TextInput
                    style={{ height: 40, width: 250, borderRadius: 20, backgroundColor: '#5f6277', textAlign: 'center', fontSize: 15, marginBottom: 20 }}
                    placeholder="Mes"
                    placeholderTextColor="#767886"
                    keyboardType={'numeric'}
                    value={monthield}



                />
                <TextInput
                    style={{ height: 40, width: 250, borderRadius: 20, backgroundColor: '#5f6277', textAlign: 'center', fontSize: 15, marginBottom: 20 }}
                    placeholder="Ano"
                    placeholderTextColor="#767886"
                    keyboardType={'numeric'}
                    value={yearField}


                />
                <TextInput
                    style={{ height: 40, width: 250, borderRadius: 20, backgroundColor: '#5f6277', textAlign: 'center', fontSize: 15, marginBottom: 20 }}
                    placeholder="CVC"
                    placeholderTextColor="#767886"
                    keyboardType='number-pad'
                    value={cvcField}


                />
                <FlatButton text="Pagar" onPress={handlePaymentClick} />
            </SafeAreaView>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#2a2e4a',
    },
    text: {
        fontSize: 18,
        marginBottom: '10%',
        color: '#fff'
    },



});