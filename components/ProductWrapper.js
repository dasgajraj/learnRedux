import { View, Text, StyleSheet, ScrollView, Button } from 'react-native'
import React from 'react'
import Header from './Header'
import Product from './Product'
import { useSelector } from 'react-redux'
import { lightTheme, darkTheme } from '../common/colors'

const ProductWrapper = ({ navigation }) => {
  const isDarkMode = useSelector((state) => state.themeReducer.isDarkMode);
  const theme = isDarkMode ? darkTheme : lightTheme;

  const products = [
    { name: "Apple", price: 4000, color: "black" },
    { name: "Samsung", price: 400, color: "red" },
    { name: "Oppo", price: 40, color: "green" },
    { name: "Techno", price: 4, color: "orange" },
  ];

  return (
    <View style={{ flex: 1, backgroundColor: theme.background }}>
      <Header />
      <Button title="Settings Page" onPress={() => navigation.navigate("settings")} />
      <ScrollView style={[styles.container, { backgroundColor: theme.background }]}>
        <Text style={[styles.title, { color: theme.text }]}>Product List</Text>
        <View style={styles.productContainer}>
          {products.map((item) => (
            <Product key={item.name} item={item} />
          ))}
        </View>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 16,
    textAlign: 'center',
  },
  productContainer: {
    gap: 16,
  },
})

export default ProductWrapper;
