import React, {useState, useEffect} from 'react';
import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {IUserStore} from '../redux/user/types';
import Card from '../components/TransactionCard';
import CustomButton from '../components/CustomButton';
import {faker} from '@faker-js/faker';
import {addTransaction} from '../redux/Transactions/transactionsReducer';
import {ITransaction} from '../redux/Transactions/types';
import Navbar from '../components/navbar';

const HomeScreen: React.FC = () => {
  // const [defaultTransactions, setDefaultTransactions] = useState(5);
  const userInfo = useSelector((state: {user: IUserStore}) => state.user);
  // const [totalPoints, setTotalPoints] = useState(userInfo.points);
  const dispatch = useDispatch();

  // const transactionCard = Array.from(
  //   {length: defaultTransactions},
  //   (_, index) => {
  //     const amount = faker.number.int({max: 500});
  //     const points = amount / 50;
  //     // setTotalPoints(totalPoints + points);
  //     dispatch(addPoints({points: points}));
  //     return (
  //       <Card
  //         key={index}
  //         date={faker.date.anytime()}
  //         amount={amount}
  //         points={points}
  //       />
  //     );
  //   },
  // );

  useEffect(() => {
    const userTransactions = useSelector(
      (state: {userTransaction: ITransaction}) => state.userTransaction,
    );
  }, []);

  return (
    <ScrollView>
      <Navbar />
      <CustomButton lable={'New'} onPress={addNewTransaction} />
      {/* {transactionCard} */}
    </ScrollView>
  );
};

const styles = StyleSheet.create({});

export default HomeScreen;
