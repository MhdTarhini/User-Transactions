import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SigninScreen from './screens/Signin';
import SignupScreen from './screens/Signup';
import {Provider} from 'react-redux';
import {store} from './redux/store';

const Stack = createNativeStackNavigator();

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="signin">
          <Stack.Screen name="signin" component={SigninScreen} />
          <Stack.Screen name="signup" component={SignupScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};


export default App;
