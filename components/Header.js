import { StyleSheet, Text, View } from 'react-native';
import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { lightTheme, darkTheme } from '../common/colors';

const Header = () => {
  const cartData = useSelector((state) => state.reducer);
  const isDarkMode = useSelector((state) => state.themeReducer.isDarkMode);
  const theme = isDarkMode ? darkTheme : lightTheme;

  const [itemCount, setItemCount] = useState(0);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    setItemCount(cartData.length);
    setTotal(cartData.reduce((acc, item) => acc + (item.price || 0), 0));
  }, [cartData]);

  const formattedTotal = total.toFixed(2);

  return (
    <View style={[styles.header, { backgroundColor: theme.card, shadowColor: theme.text }]}>
      <Text style={[styles.title, { color: theme.text }]}>🛍️ My Shopping App</Text>
      <View style={styles.cartInfo}>
        <Text style={[styles.cartIcon, { color: theme.primary }]}>🛒</Text>
        <View style={[styles.badge, { backgroundColor: theme.primary }]}>
          <Text style={[styles.badgeText, { color: '#fff' }]}>{itemCount}</Text>
        </View>
        <Text style={[styles.totalText, { color: theme.text }]}>${formattedTotal}</Text>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  header: {
    paddingVertical: 20,
    paddingHorizontal: 24,
    borderRadius: 12,
    marginBottom: 16,
    alignItems: 'center',
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  title: {
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
    borderRadius: 12,
    paddingHorizontal: 8,
    paddingVertical: 4,
    marginRight: 8,
  },
  badgeText: {
    fontWeight: '600',
    fontSize: 14,
  },
  totalText: {
    fontSize: 16,
    fontWeight: '500',
  },
});
