import { StyleSheet, Text, View, Button, Alert } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart, removeFromCart } from "../redux/Action"
import { lightTheme, darkTheme } from '../common/colors';

const Product = ({ item }) => {
  const cartItems = useSelector((state) => state.reducer);
  const isDarkMode = useSelector((state) => state.themeReducer.isDarkMode);
  const theme = isDarkMode ? darkTheme : lightTheme;

  const dispatch = useDispatch();
  const [isAdded, setIsAdded] = useState(false);

  const handleAddToCart = (item) => {
    dispatch(addToCart(item));
    Alert.alert('Added to Cart', `${item.name} added to your cart. Price: $${item.price}`);
  };

  const handleRemoveFromCart = (item) => {
    dispatch(removeFromCart(item.name));
    Alert.alert('Removed From Cart', `${item.name} removed from your cart. Price: $${item.price}`);
  };

  useEffect(() => {
    let result = cartItems.filter((ele) => ele.name === item.name);
    setIsAdded(result.length > 0);
  }, [cartItems]);

  return (
    <View style={[styles.card, { backgroundColor: theme.card }]}>
      <Text style={[styles.name, { color: theme.text }]}>{item.name}</Text>
      <Text style={[styles.price, { color: theme.text }]}>${item.price}</Text>
      <Text style={[styles.color, { color: item.color }]}>{item.color}</Text>
      {isAdded ? (
        <Button title="Remove From Cart" onPress={() => handleRemoveFromCart(item)} />
      ) : (
        <Button title="Add To Cart" onPress={() => handleAddToCart(item)} />
      )}
    </View>
  );
};

export default Product;

const styles = StyleSheet.create({
  card: {
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
  },
  price: {
    fontSize: 16,
    marginBottom: 4,
  },
  color: {
    fontSize: 14,
    marginBottom: 10,
    textTransform: 'capitalize',
  },
});
