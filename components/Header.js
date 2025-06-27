import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Header = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>🛍️ My Shopping App</Text>
      <View style={styles.cartInfo}>
        <Text style={styles.cartText}>🛒 Cart: </Text>
        <Text style={styles.cartItem}>Items: 0</Text>
        <Text style={styles.cartItem}> | Total: $0</Text>
      </View>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#6200EE',
    paddingVertical: 16,
    paddingHorizontal: 20,
    borderRadius: 8,
    marginBottom: 16,
  },
  title: {
    color: 'white',
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  cartInfo: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 6,
  },
  cartText: {
    color: 'white',
    fontWeight: '600',
    fontSize: 16,
  },
  cartItem: {
    color: 'white',
    fontSize: 16,
  }
})
