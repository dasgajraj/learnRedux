import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Switch, ScrollView, Image } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { setTheme } from '../redux/Action';
import { lightTheme, darkTheme } from '../common/colors';

import {
  FontAwesome5,
  MaterialCommunityIcons,
  MaterialIcons,
  Entypo,
} from '@expo/vector-icons';

const Settings = () => {
  const isDarkMode = useSelector((state) => state.themeReducer.isDarkMode);
  const { user, loading, error } = useSelector((state) => state.userReducer);
  const dispatch = useDispatch();
  const cartData = useSelector((state)=> state.reducer)
  const [total,setTotal] = useState(0);

  useEffect(()=>{
    setTotal(cartData.reduce((accu,current)=> accu+current.price,0))
  },[isDarkMode])

  const theme = isDarkMode ? darkTheme : lightTheme;
  const toggleSwitch = () => dispatch(setTheme(!isDarkMode));

  if (loading) return <CenteredText text="Loading..." color={theme.text} bg={theme.background} />;
  if (error) return <CenteredText text={error} color="red" bg={theme.background} />;
  if (!user) return <CenteredText text="No user data available." color={theme.text} bg={theme.background} />;

  return (
    <ScrollView style={[styles.container, { backgroundColor: theme.background }]}>
      <Text style={[styles.title, { color: theme.text }]}>User Settings</Text>

      <View style={styles.row}>
        <Text style={[styles.label, { color: theme.text }]}>Dark Mode</Text>
        <Switch
          trackColor={{ false: '#767577', true: theme.primary }}
          thumbColor={isDarkMode ? '#f5dd4b' : '#f4f3f4'}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleSwitch}
          value={isDarkMode}
        />
        <Text>Your Total Was {total}</Text>
      </View>

      {/* Profile */}
      <Section title="Profile" theme={theme}>
        <View style={styles.profileContainer}>
          <Image source={{ uri: user.image }} style={styles.avatar} />
          <Text style={[styles.name, { color: theme.text }]}>{user.firstName} {user.lastName}</Text>
          <Text style={{ color: theme.text }}>{user.email}</Text>
          <Text style={{ color: theme.text }}>{user.username} • {user.gender}, {user.age}</Text>
          <Text style={{ color: theme.text }}>Born: {user.birthDate}</Text>
          <Text style={{ color: theme.text }}>Phone: {user.phone}</Text>
        </View>
      </Section>

      {/* Personal Info */}
      <Section title="Personal Info" theme={theme}>
        <InfoItem icon="tint" iconFamily={FontAwesome5} label="Blood Group" value={user.bloodGroup} theme={theme} />
        <InfoItem icon="eye" iconFamily={FontAwesome5} label="Eye Color" value={user.eyeColor} theme={theme} />
        <InfoItem icon="cut" iconFamily={FontAwesome5} label="Hair" value={`${user.hair?.color}, ${user.hair?.type}`} theme={theme} />
        <InfoItem icon="ruler-vertical" iconFamily={FontAwesome5} label="Height" value={`${user.height} cm`} theme={theme} />
        <InfoItem icon="scale-bathroom" iconFamily={MaterialCommunityIcons} label="Weight" value={`${user.weight} kg`} theme={theme} />
      </Section>

      {/* Address */}
      <Section title="Address" theme={theme}>
        <InfoItem icon="map-marker" iconFamily={MaterialCommunityIcons} label="Address" value={user.address?.address} theme={theme} />
        <InfoItem icon="location-city" iconFamily={MaterialIcons} label="City" value={`${user.address?.city}, ${user.address?.state} ${user.address?.postalCode}`} theme={theme} />
        <InfoItem icon="flag" iconFamily={FontAwesome5} label="Country" value={user.address?.country} theme={theme} />
      </Section>

      {/* Company */}
      <Section title="Company" theme={theme}>
        <InfoItem icon="work" iconFamily={MaterialIcons} label="Title" value={user.company?.title} theme={theme} />
        <InfoItem icon="office-building" iconFamily={MaterialCommunityIcons} label="Company" value={user.company?.name} theme={theme} />
        <InfoItem icon="account-group" iconFamily={MaterialCommunityIcons} label="Department" value={user.company?.department} theme={theme} />
        <InfoItem icon="map-marker" iconFamily={MaterialCommunityIcons} label="Location" value={`${user.company?.address?.city}, ${user.company?.address?.state}`} theme={theme} />
      </Section>

      {/* Bank */}
      <Section title="Bank" theme={theme}>
        <InfoItem icon="credit-card" iconFamily={FontAwesome5} label="Card" value={user.bank?.cardNumber} theme={theme} />
        <InfoItem icon="layer-group" iconFamily={FontAwesome5} label="Type" value={user.bank?.cardType} theme={theme} />
        <InfoItem icon="calendar-alt" iconFamily={FontAwesome5} label="Expiry" value={user.bank?.cardExpire} theme={theme} />
        <InfoItem icon="university" iconFamily={FontAwesome5} label="IBAN" value={user.bank?.iban} theme={theme} />
      </Section>

      {/* Crypto Wallet */}
      <Section title="Crypto Wallet" theme={theme}>
        <InfoItem icon="bitcoin" iconFamily={FontAwesome5} label="Coin" value={user.crypto?.coin} theme={theme} />
        <InfoItem icon="network" iconFamily={Entypo} label="Network" value={user.crypto?.network} theme={theme} />
        <InfoItem icon="wallet" iconFamily={MaterialCommunityIcons} label="Wallet" value={user.crypto?.wallet} theme={theme} />
      </Section>
    </ScrollView>
  );
};

export default Settings;

// ✅ Reusable Components

const CenteredText = ({ text, color, bg }) => (
  <View style={[styles.container, { backgroundColor: bg, justifyContent: 'center', alignItems: 'center' }]}>
    <Text style={{ color, fontSize: 16 }}>{text}</Text>
  </View>
);

const Section = ({ title, children, theme }) => (
  <View style={styles.section}>
    <Text style={[styles.sectionTitle, { color: theme.text }]}>{title}</Text>
    <View style={[styles.card, { backgroundColor: theme.card }]}>
      {children}
    </View>
  </View>
);

const InfoItem = ({ icon, label, value, iconFamily = MaterialIcons, theme }) => {
  const Icon = iconFamily;
  return (
    <View style={styles.infoRow}>
      {icon && <Icon name={icon} size={20} color={theme.icon} style={{ marginRight: 10 }} />}
      <Text style={[styles.infoText, { color: theme.text }]}>
        {label && <Text style={styles.infoLabel}>{label}: </Text>}
        {value}
      </Text>
    </View>
  );
};

// 🎨 Styles

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
  section: {
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: '600',
    marginBottom: 12,
  },
  card: {
    padding: 16,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 3,
    elevation: 3,
  },
  profileContainer: {
    alignItems: 'center',
    marginBottom: 12,
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
  infoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  infoText: {
    fontSize: 16,
    flexShrink: 1,
  },
  infoLabel: {
    fontWeight: '500',
  },
});
