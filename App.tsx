import {SafeAreaView, StatusBar, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import Welcome from './src/screen/onboarding';
import Home from './src/screen/home';
const App = () => {
  const Stack = createNativeStackNavigator();

  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <SafeAreaView style={{flex: 1}}>
        <StatusBar barStyle={'light-content'} />
        <NavigationContainer>
          <Stack.Navigator
            initialRouteName="Welcome"
            screenOptions={{headerShown: false}}>
            <Stack.Screen
              name="Welcome"
              component={Welcome}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="Home"
              component={Home}
              options={{headerShown: false}}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaView>
    </GestureHandlerRootView>
  );
};

export default App;

const styles = StyleSheet.create({});
