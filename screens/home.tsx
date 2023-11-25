import React, {useState} from 'react';
import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import {useSelector} from 'react-redux';
import {IUserStore} from '../redux/user/types';
import Card from '../components/TransactionCard';
import CustomButton from '../components/CustomButton';
import {faker} from '@faker-js/faker';

interface Props {
  navigation: any;
}

const HomeScreen: React.FC<Props> = ({navigation}) => {
  const [number, setNumber] = useState(5);
  const userInfo = useSelector(
    (state: {user: IUserStore}) => state.user.userInfo,
  );

  const transactionCard = Array.from({length: number}, (_, index) => {
    let amount = faker.number.int({max: 500});
    return (
      <Card
        key={index}
        date={faker.date.anytime()}
        amount={amount}
        points={amount / 50}
      />
    );
  });
  return (
    <ScrollView>
      <View style={styles.navbar}>
        <Image
          style={styles.logoImage}
          source={require('../assets/logo.png')}
        />
        <Text>{userInfo.username}</Text>
      </View>
      <CustomButton
        lable={'New'}
        onPress={() => {
          setNumber(number + 1);
        }}
      />
      {transactionCard}
    </ScrollView>
  );
};

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
});

export default HomeScreen;
