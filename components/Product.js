import { StyleSheet, Text, View, Button, Alert } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart } from "../redux/Action"

const Product = ({ item }) => {
    const cartItems = useSelector((state) => state.reducer)
    const dispatch = useDispatch();
    const [isAdded, setIsAdded] = useState(false)

    const handleAddToCart = () => {
        dispatch(addToCart(item));
        Alert.alert(
            'Added to Cart',
            `${item.name} added to your cart. Price: $${item.price}`
        );
    };


    useEffect(() => {
        if (cartItems && cartItems.length) {
            cartItems.forEach((ele) => {
                if (ele.name === item.name) {
                    setIsAdded(true)
                }
            }
            )
        }
    }, [cartItems])

    return (
        <View style={styles.card}>
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.price}>${item.price}</Text>
            <Text style={[styles.color, { color: item.color }]}>{item.color}</Text>
            {
                isAdded
                    ?
                    <Button
                        title="Remove From Cart"
                        onPress={() => { }}
                    />
                    :
                    <Button
                        title="Add To Cart"
                        onPress={handleAddToCart}
                    />
            }

        </View>
    )
}

export default Product

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#fff',
        padding: 16,
        borderRadius: 10,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowRadius: 6,
        elevation: 3,
    },
    name: {
        fontSize: 20,
        fontWeight: '600',
        marginBottom: 4,
        color: '#222'
    },
    price: {
        fontSize: 16,
        marginBottom: 4,
        color: '#555'
    },
    color: {
        fontSize: 14,
        marginBottom: 10,
        textTransform: 'capitalize',
    }
})
