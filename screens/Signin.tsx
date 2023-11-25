import React, {useState} from 'react';
import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import CustomInput from '../components/CustomInput';
import CustomButton from '../components/CustomButton';
import {useDispatch, useSelector} from 'react-redux';
import {LoginUser} from '../redux/user/userReducer';
import {faker} from '@faker-js/faker';

interface Props {
  navigation: any;
}

const SigninScreen: React.FC<Props> = ({navigation}) => {
  const [userInfo, setUserInfo] = useState({
    email: '',
    password: '',
  });
  const dispatch = useDispatch();

  const handleInputChange = (fieldName: string, text: string) => {
    setUserInfo(prevState => ({
      ...prevState,
      [fieldName]: text,
    }));
  };

  const onPress = () => {
    const userData = {
      token: 'token',
      userInfo: {
        username: faker.person.fullName(),
        email: faker.internet.email(),
        points: faker.number.int(),
      },
      active: true,
      isAuthenticated: true,
    };
    dispatch(LoginUser(userData));
    navigation.navigate('home');
  };
  return (
    <SafeAreaView>
      <View style={styles.logoContainer}>
        <Image
          style={styles.logoImage}
          source={require('../assets/logo.png')}
        />
        <Text style={styles.logoText}>User Transactions</Text>
      </View>
      <CustomInput
        label={'Email'}
        placeholder={'mail@email.com'}
        isPassword={false}
        onChangeText={text => handleInputChange('email', text)}
      />
      <CustomInput
        label={'Password'}
        placeholder={'password'}
        isPassword={true}
        onChangeText={text => handleInputChange('password', text)}
      />
      <CustomButton lable={'Sign in'} onPress={onPress} />
      <View style={styles.BottomText}>
        <Text>Don't have an account? </Text>
        <TouchableOpacity>
          <Text
            style={styles.BottomTextSignUp}
            onPress={() => navigation.navigate('signup')}>
            Sign up
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
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

  BottomTextSignUp: {
    fontSize: 18,
    fontWeight: '700',
  },
});

export default SigninScreen;
