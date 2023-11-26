import React, {useState, useEffect} from 'react';
import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {IUserStore} from '../redux/user/types';
import Card from '../components/TransactionCard';
import CustomButton from '../components/CustomButton';
import {faker} from '@faker-js/faker';
import {addPoints} from '../redux/user/userReducer';

const HomeScreen: React.FC = () => {
  const [defaultTransactions, setDefaultTransactions] = useState(5);
  const userInfo = useSelector((state: {user: IUserStore}) => state.user);
  // const [totalPoints, setTotalPoints] = useState(userInfo.points);
  const dispatch = useDispatch();

  const addNewTransaction = () => {
    setDefaultTransactions(defaultTransactions + 1);
  };

  const transactionCard = Array.from(
    {length: defaultTransactions},
    (_, index) => {
      const amount = faker.number.int({max: 500});
      const points = amount / 50;
      // setTotalPoints(totalPoints + points);
      dispatch(addPoints({points: points}));
      return (
        <Card
          key={index}
          date={faker.date.anytime()}
          amount={amount}
          points={points}
        />
      );
    },
  );

  useEffect(() => {}, [defaultTransactions]);

  return (
    <ScrollView>
      <View style={styles.navbar}>
        <Image
          style={styles.logoImage}
          source={require('../assets/logo.png')}
        />
        <View style={styles.rigthSideNavbar}>
          <Text>{userInfo.userInfo.username}</Text>
          <Text>{userInfo.points}</Text>
        </View>
      </View>
      <CustomButton lable={'New'} onPress={() => {}} />
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
  rigthSideNavbar: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end',
    gap: 5,
  },
});

export default HomeScreen;
