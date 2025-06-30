import React from 'react';
import { StyleSheet, Text, View, Switch } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { setTheme } from '../redux/Action';
import { lightTheme, darkTheme } from '../common/colors';

const Settings = () => {
  const isDarkMode = useSelector((state) => state.themeReducer.isDarkMode);
  const dispatch = useDispatch();

  const toggleSwitch = () => dispatch(setTheme(!isDarkMode));
  const theme = isDarkMode ? darkTheme : lightTheme;

  // Combine base styles with theme styles
  const themedContainer = StyleSheet.flatten([styles.container, { backgroundColor: theme.background }]);
  const themedText = { color: theme.text };

  return (
    <View style={themedContainer}>
      <Text style={[styles.title, themedText]}>
        Settings
      </Text>

      <View style={styles.row}>
        <Text style={[styles.label, themedText]}>
          Dark Mode
        </Text>
        <Switch
          trackColor={{ false: '#767577', true: theme.primary }}
          thumbColor={isDarkMode ? '#f5dd4b' : '#f4f3f4'}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleSwitch}
          value={isDarkMode}
        />
      </View>
    </View>
  );
};

export default Settings;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    justifyContent: 'flex-start',
    // backgroundColor comes from theme
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    marginBottom: 24,
    // color comes from theme
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  label: {
    fontSize: 18,
    // color comes from theme
  },
});
