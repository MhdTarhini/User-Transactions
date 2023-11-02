import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Signin from './screens/Signin';

const Stack = createNativeStackNavigator();

function App(): JSX.Element {
  return (
     <NavigationContainer>
      <Stack.Navigator initialRouteName="home">
        <Stack.Screen name="home" component={Signin} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


export default App;
