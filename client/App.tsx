import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
} from 'react-native';
import CustomInput from './components/CustomInput';

function App(): JSX.Element {
  return (
    <SafeAreaView >
     <Text>Hello world</Text>
     <CustomInput/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
});

export default App;
