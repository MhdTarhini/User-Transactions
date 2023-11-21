import React from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import CustomInput from '../components/CustomInput';
import CustomButton from '../components/CustomButton';

interface Props {
  navigation: any;
}

const SignupScreen: React.FC<Props> = ({navigation}) => {
  const onPress = () => {};
  return (
    <ScrollView>
      <Text>Home Screen</Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({});

export default SignupScreen;
