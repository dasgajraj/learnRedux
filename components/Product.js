import { StyleSheet, Text, View, Button, Alert } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart, removeFromCart } from "../redux/Action"

const Product = ({ item }) => {
    const cartItems = useSelector((state) => state.reducer)
    const dispatch = useDispatch();
    const [isAdded, setIsAdded] = useState(false)

    const handleAddToCart = (item) => {
        dispatch(addToCart(item));
        Alert.alert(
            'Added to Cart',
            `${item.name} added to your cart. Price: $${item.price}`
        );
    };
        const handleRemoveFromCart = (item) => {
        dispatch(removeFromCart(item.name));
        Alert.alert(
            'Removed From Cart',
            `${item.name} removed from your cart. Price: $${item.price}`
        );
    };


    useEffect(() => {
      let result = cartItems.filter((ele)=>{
        return ele.name===item.name
      })
      if(result.length) setIsAdded(true)
      else setIsAdded(false)
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
                        onPress={()=>handleRemoveFromCart(item)}
                    />
                    :
                    <Button
                        title="Add To Cart"
                        onPress={()=>handleAddToCart(item)}
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


/*Implement remove from cart functionality in Product component and Redux actions */