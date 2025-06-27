import { StyleSheet, Text, View, Button, Alert } from 'react-native'
import React from 'react'

const Product = ({ item }) => {
  return (
    <View style={styles.card}>
      <Text style={styles.name}>{item.name}</Text>
      <Text style={styles.price}>${item.price}</Text>
      <Text style={[styles.color, { color: item.color }]}>{item.color}</Text>
      <Button
        title="Add To Cart"
        onPress={() =>
          Alert.alert(
            'Added to Cart',
            `${item.name} added to your cart. Price: $${item.price}`
          )
        }
      />
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
