
import React, { useState, useEffect } from 'react';
import { Text, View, FlatList, Button, StyleSheet, Image } from 'react-native';
import Api from '../../services/Api'


export default () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        getProducts();
    }, []);

    const getProducts = async () => {


        const data = await Api.getProducts()
        console.log(data)
        setProducts(data);

    }
    const viewDetail = async () => {

    }













    return (
        <FlatList
            data={products}
            renderItem={({ item }) => (
                <View style={styles.product}>
                    <View style={styles.imageContainer}>
                        <Image style={styles.image} source={{ uri: item.imagem }} />
                    </View>
                    <View style={styles.details}>
                        <Text style={styles.title}>{item.nome}</Text>
                        <Text style={styles.price}>{item.preco}€</Text>
                    </View>

                    <View style={styles.actions}>
                        <Button color='#2a2e4a' title="Adicionar Carrinho" />
                    </View>
                </View>

            )} />
    )
}
const styles = StyleSheet.create({
    product: {
        shadowColor: 'black',
        shadowOpacity: 0.26,
        textShadowOffset: { width: 0, height: 2 },
        shadowRadius: 8,
        elevation: 5,
        borderRadius: 10,
        backgroundColor: 'white',
        height: 300,
        margin: 20
    },
    image: {
        width: '100%',
        height: '100%',
    },
    title: {
        fontSize: 18,
        marginVertical: 1,

    },
    price: {
        fontSize: 14,
        color: '#888'
    },
    actions: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        height: '35%',
        paddingHorizontal: 20
    },
    details: {
        alignItems: 'center',
        height: '15%',
        padding: 10
    },
    imageContainer: {
        width: '100%',
        height: '60%',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        overflow: 'hidden'

    }
})


