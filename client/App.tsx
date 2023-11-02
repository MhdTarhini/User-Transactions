import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
} from 'react-native';
import CustomInput from './components/CustomInput';
import CustomButton from './components/CustomButton';

function App(): JSX.Element {
  const onPress = ()=>{}
  return (
    <SafeAreaView >
     <CustomInput label={'Email'} placeholder={'mail@email.com'} isPassword={false}/>
     <CustomInput label={'Password'} placeholder={'Password'} isPassword={true} />
     <CustomButton lable={'Sign in'} onPress={onPress} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
});

export default App;
