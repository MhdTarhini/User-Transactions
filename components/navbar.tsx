import React, {useState} from 'react';
import {Image, StyleSheet, Text, TextInput, View} from 'react-native';
import {useSelector} from 'react-redux';
import {IUserStore} from '../redux/user/types';

function Navbar() {
  const userInfo = useSelector((state: {user: IUserStore}) => state.user);

  return (
    <View style={styles.navbar}>
      <Image style={styles.logoImage} source={require('../assets/logo.png')} />
      <View style={styles.rigthSideNavbar}>
        <Text>{userInfo.userInfo.username}</Text>
        <Text>{userInfo.points}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  navbar: {
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
  },
  logoImage: {
    width: 50,
    height: 50,
  },
  rigthSideNavbar: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end',
    gap: 5,
  },
});

export default Navbar;
