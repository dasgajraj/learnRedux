import React, { useEffect } from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { useDispatch } from 'react-redux';
import { fetchUsers } from './redux/Action'; 

import ProductWrapper from './components/ProductWrapper';
import Settings from "./components/Settings";

const Stack = createStackNavigator();

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers()); 
  }, [dispatch]);

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="home" component={ProductWrapper} />
        <Stack.Screen name="settings" component={Settings} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
