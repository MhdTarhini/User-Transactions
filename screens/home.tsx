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
import {useSelector} from 'react-redux';
import {IUserStore} from '../redux/user/types';
import Card from '../components/TransactionCard';

interface Props {
  navigation: any;
}

const HomeScreen: React.FC<Props> = ({navigation}) => {
  const userInfo = useSelector(
    (state: {user: IUserStore}) => state.user.userInfo,
  );
  const onPress = () => {};
  return (
    <ScrollView>
      <Text>{userInfo.email}</Text>
      <Card date="2023-11-22" amount={50} points={10} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({});

export default HomeScreen;
