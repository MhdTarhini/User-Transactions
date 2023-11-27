import React, {useState} from 'react';
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
import {validateUserData} from '../components/validateUserInfo';

interface Props {
  navigation: any;
}

interface ErrorMessage {
  username: string;
  email: string;
  password: string;
}

interface UserInfo {
  username: string;
  email: string;
  password: string;
}

const SignupScreen: React.FC<Props> = ({navigation}) => {
  const [userInfo, setUserInfo] = useState<UserInfo>({
    username: '',
    email: '',
    password: '',
  });
  const [errorMessage, setErrorMessage] = useState<ErrorMessage>({
    username: '',
    email: '',
    password: '',
  });
  const onPress = () => {
    const {isValid, errors} = validateUserData(userInfo);
    if (isValid) {
      navigation.navigate('home');
    } else {
      setErrorMessage(errors);
    }
  };

  const handleInputChange = (fieldName: string, text: string) => {
    setUserInfo(prevState => ({
      ...prevState,
      [fieldName]: text,
    }));
  };
  return (
    <ScrollView>
      <View style={styles.logoContainer}>
        <Image
          style={styles.logoImage}
          source={require('../assets/logo.png')}
        />
        <Text style={styles.logoText}>User Transactions</Text>
      </View>
      <View style={styles.inputContainer}>
        <CustomInput
          label={'Username'}
          placeholder={'Username'}
          isPassword={false}
          keyboardType="default"
          onChangeText={text => handleInputChange('username', text)}
        />
        {errorMessage.username && (
          <Text style={styles.error}>{errorMessage.username}</Text>
        )}
        <CustomInput
          label={'Email'}
          placeholder={'mail@email.com'}
          isPassword={false}
          keyboardType="email-address"
          onChangeText={text => handleInputChange('email', text)}
        />
        {errorMessage.email && (
          <Text style={styles.error}>{errorMessage.email}</Text>
        )}
        <CustomInput
          label={'Password'}
          placeholder={'password'}
          isPassword={true}
          keyboardType="default"
          onChangeText={text => handleInputChange('password', text)}
        />
        {errorMessage.password && (
          <Text style={styles.error}>{errorMessage.password}</Text>
        )}
      </View>
      <CustomButton lable={'Sign up'} onPress={onPress} />
      <View style={styles.BottomText}>
        <Text>Already have an account ? </Text>
        <TouchableOpacity>
          <Text
            style={styles.BottomTextSignIn}
            onPress={() => navigation.navigate('signin')}>
            Sign in
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  logoImage: {
    width: 150,
    height: 150,
  },

  logoContainer: {
    paddingTop: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },

  logoText: {
    fontSize: 20,
    padding: 10,
    fontWeight: '700',
    color: '#000000',
  },

  BottomText: {
    justifyContent: 'center',
    alignItems: 'center',
  },

  BottomTextSignIn: {
    fontSize: 18,
    fontWeight: '700',
  },
  inputContainer: {
    display: 'flex',
    flexDirection: 'column',
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  error: {
    fontSize: 12,
    color: 'red',
  },
});

export default SignupScreen;
