import React from 'react';
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

function Signin(): JSX.Element {
  const onPress = ()=>{}
  return (
    <SafeAreaView >
      <View style={styles.logoContainer}>
        <Image style={styles.logoImage} source={require('../assets/logo.png')}/>
        <Text style={styles.logoText}>User Purchases</Text>
      </View>
     <CustomInput label={'Email'} placeholder={'mail@email.com'} isPassword={false}/>
     <CustomInput label={'Password'} placeholder={'password'} isPassword={true} />
     <CustomButton lable={'Sign in'} onPress={onPress} />
     <View style={styles.BottomText}>
     <Text>Don't have an account? </Text>
     <TouchableOpacity><Text style={styles.BottomTextSignUp}>Sign up</Text></TouchableOpacity>
     </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  logoImage:{
    width: 150,
    height: 150,
  },

  logoContainer:{
    paddingTop:50,
    justifyContent:"center",
    alignItems:"center",
  },

  logoText:{
    fontSize: 20,
    padding: 10,
    fontWeight: "700",
    color:"#000000"
  },

  BottomText:{
    justifyContent:"center",
    alignItems:"center",
  },

  BottomTextSignUp:{
    fontSize: 18,
    fontWeight:"700"
  }
});

export default Signin;
