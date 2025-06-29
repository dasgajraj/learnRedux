import { StyleSheet, Text, View } from 'react-native';
import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

const Header = () => {
  const cartData = useSelector((state) => state.reducer);
  const [itemCount, setItemCount] = useState(0);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    setItemCount(cartData.length);
    setTotal(cartData.reduce((acc, item) => acc + (item.price || 0), 0));
  }, [cartData]);

  const formattedTotal = total.toFixed(2);

  return (
    <View style={styles.header}>
      <Text style={styles.title}>🛍️ My Shopping App</Text>
      <View style={styles.cartInfo}>
        <Text style={styles.cartIcon}>🛒</Text>
        <View style={styles.badge}>
          <Text style={styles.badgeText}>{itemCount}</Text>
        </View>
        <Text style={styles.totalText}>${formattedTotal}</Text>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#ffffff',
    paddingVertical: 20,
    paddingHorizontal: 24,
    borderRadius: 12,
    marginBottom: 16,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  title: {
    color: '#333333',
    fontSize: 24,
    fontWeight: '700',
    marginBottom: 10,
  },
  cartInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  cartIcon: {
    fontSize: 22,
    marginRight: 6,
  },
  badge: {
    backgroundColor: '#333333',
    borderRadius: 12,
    paddingHorizontal: 8,
    paddingVertical: 4,
    marginRight: 8,
  },
  badgeText: {
    color: '#ffffff',
    fontWeight: '600',
    fontSize: 14,
  },
  totalText: {
    color: '#333333',
    fontSize: 16,
    fontWeight: '500',
  },
});
