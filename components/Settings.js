import React from 'react';
import { StyleSheet, Text, View, Switch, ScrollView, Image } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { setTheme } from '../redux/Action';
import { lightTheme, darkTheme } from '../common/colors';

const Settings = () => {
  const isDarkMode = useSelector((state) => state.themeReducer.isDarkMode);
  const { user, loading, error } = useSelector((state) => state.userReducer);
  const dispatch = useDispatch();

  const theme = isDarkMode ? darkTheme : lightTheme;
  const toggleSwitch = () => dispatch(setTheme(!isDarkMode));

  if (loading) return <View style={[styles.container, { backgroundColor: theme.background }]}><Text style={{ color: theme.text }}>Loading...</Text></View>;
  if (error) return <View style={[styles.container, { backgroundColor: theme.background }]}><Text style={{ color: 'red' }}>{error}</Text></View>;
  if (!user) return <View style={[styles.container, { backgroundColor: theme.background }]}><Text style={{ color: theme.text }}>No user data available.</Text></View>;

  return (
    <ScrollView style={[styles.container, { backgroundColor: theme.background }]}>
      <Text style={[styles.title, { color: theme.text }]}>Settings</Text>

      <View style={styles.row}>
        <Text style={[styles.label, { color: theme.text }]}>Dark Mode</Text>
        <Switch
          trackColor={{ false: '#767577', true: theme.primary }}
          thumbColor={isDarkMode ? '#f5dd4b' : '#f4f3f4'}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleSwitch}
          value={isDarkMode}
        />
      </View>

      {/* User Profile */}
      <Text style={[styles.sectionTitle, { color: theme.text }]}>User Details</Text>

      <View style={styles.profileContainer}>
        <Image source={{ uri: user.image }} style={styles.avatar} />
        <Text style={[styles.name, { color: theme.text }]}>{user.firstName} {user.lastName}</Text>
        <Text style={{ color: theme.text }}>{user.email}</Text>
        <Text style={{ color: theme.text }}>Age: {user.age}, Gender: {user.gender}</Text>
        <Text style={{ color: theme.text }}>Birth Date: {user.birthDate}</Text>
        <Text style={{ color: theme.text }}>Phone: {user.phone}</Text>
        <Text style={{ color: theme.text }}>Username: {user.username}</Text>
        <Text style={{ color: theme.text }}>Blood Group: {user.bloodGroup}</Text>
        <Text style={{ color: theme.text }}>Eye Color: {user.eyeColor}</Text>
        <Text style={{ color: theme.text }}>Hair: {user.hair?.color} - {user.hair?.type}</Text>
      </View>

      {/* Address */}
      <Text style={[styles.sectionTitle, { color: theme.text }]}>Address</Text>
      <View style={styles.infoCard}>
        <Text style={{ color: theme.text }}>{user.address?.address}</Text>
        <Text style={{ color: theme.text }}>{user.address?.city}, {user.address?.state} {user.address?.postalCode}</Text>
        <Text style={{ color: theme.text }}>{user.address?.country}</Text>
      </View>

      {/* Company */}
      <Text style={[styles.sectionTitle, { color: theme.text }]}>Company</Text>
      <View style={styles.infoCard}>
        <Text style={{ color: theme.text }}>{user.company?.title}</Text>
        <Text style={{ color: theme.text }}>{user.company?.name}</Text>
        <Text style={{ color: theme.text }}>{user.company?.department}</Text>
        <Text style={{ color: theme.text }}>{user.company?.address?.city}, {user.company?.address?.state}</Text>
      </View>

      {/* Bank */}
      <Text style={[styles.sectionTitle, { color: theme.text }]}>Bank</Text>
      <View style={styles.infoCard}>
        <Text style={{ color: theme.text }}>Card: {user.bank?.cardNumber}</Text>
        <Text style={{ color: theme.text }}>Type: {user.bank?.cardType}</Text>
        <Text style={{ color: theme.text }}>Expire: {user.bank?.cardExpire}</Text>
        <Text style={{ color: theme.text }}>IBAN: {user.bank?.iban}</Text>
      </View>

      {/* Crypto */}
      <Text style={[styles.sectionTitle, { color: theme.text }]}>Crypto Wallet</Text>
      <View style={styles.infoCard}>
        <Text style={{ color: theme.text }}>Coin: {user.crypto?.coin}</Text>
        <Text style={{ color: theme.text }}>Network: {user.crypto?.network}</Text>
        <Text style={{ color: theme.text }}>Wallet: {user.crypto?.wallet}</Text>
      </View>
    </ScrollView>
  );
};

export default Settings;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    marginBottom: 24,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
  },
  label: {
    fontSize: 18,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: '600',
    marginVertical: 16,
  },
  profileContainer: {
    alignItems: 'center',
    marginBottom: 24,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 12,
  },
  name: {
    fontSize: 20,
    fontWeight: '600',
  },
  infoCard: {
    padding: 12,
    borderRadius: 8,
    backgroundColor: '#eee',
    marginBottom: 16,
  },
});
