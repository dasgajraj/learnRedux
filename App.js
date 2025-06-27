import { View, Text, StyleSheet, ScrollView } from 'react-native'
import React from 'react'
import Header from './components/Header'
import Product from './components/Product'

const App = () => {
  const products = [
    {
      name: "Samsung",
      price: 400,
      color: "red"
    },
    {
      name: "Apple",
      price: 4000,
      color: "black"
    },
    {
      name: "Oppo",
      price: 40,
      color: "green"
    },
  ]

  return (
    <ScrollView style={styles.container}>
      <Header />
      <Text style={styles.title}>Product List</Text>
      <View style={styles.productContainer}>
        {
          products.map((item) => (
            <Product key={item.name} item={item} />
          ))
        }
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f4f4f4'
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 16,
    textAlign: 'center',
    color: '#333'
  },
  productContainer: {
    gap: 16,
  },
})

export default App
  