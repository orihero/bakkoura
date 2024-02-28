import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {APP_ROUTES} from './routes';
import BottomTabNavigation from './BottomTabNavigation';

const Stack = createStackNavigator();

const AppNavigator = () => {
  const renderPrivateNavigators = () => {
    return (
      <>
        <Stack.Screen
          name={APP_ROUTES.BOTTOM_NAVIGATION}
          component={BottomTabNavigation}
          options={{
            headerTitleAlign: 'center',
          }}
        />
      </>
    );
  };

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={APP_ROUTES.BOTTOM_NAVIGATION}
        screenOptions={{headerShown: false, gestureEnabled: false}}>
        {renderPrivateNavigators()}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
