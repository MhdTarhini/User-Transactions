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

function Signup(): JSX.Element {
  const onPress = ()=>{}
  return (
    <SafeAreaView >
      <View style={styles.logoContainer}>
        <Image style={styles.logoImage} source={require('../assets/logo.png')}/>
        <Text style={styles.logoText}>User Transactions</Text>
      </View>
     <CustomInput label={'username'} placeholder={'username'} isPassword={false}/>
     <CustomInput label={'Email'} placeholder={'mail@email.com'} isPassword={false}/>
     <CustomInput label={'Password'} placeholder={'password'} isPassword={true} />
     <CustomButton lable={'Sign up'} onPress={onPress} />
     <View style={styles.BottomText}>
     <Text>Already have an account ? </Text>
     <TouchableOpacity><Text style={styles.BottomTextSignIn}>Sign in</Text></TouchableOpacity>
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

  BottomTextSignIn:{
    fontSize: 18,
    fontWeight:"700"
  }
});

export default Signup;
