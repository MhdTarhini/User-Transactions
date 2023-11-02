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
     <CustomInput label={'Email'} placeholder={'mail@email.com'} isPassword={false}/>
     <CustomInput label={'Password'} placeholder={'Password'} isPassword={true} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
});

export default App;
