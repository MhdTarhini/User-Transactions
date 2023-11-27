import React from 'react';
import {ScrollView, StyleSheet} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {IUserStore} from '../redux/user/types';
import Card from '../components/TransactionCard';
import CustomButton from '../components/CustomButton';
import {faker} from '@faker-js/faker';
import {addTransaction} from '../redux/Transactions/transactionsReducer';
import {ITransaction} from '../redux/Transactions/types';
import Navbar from '../components/navbar';
import {addPoints} from '../redux/user/userReducer';

const HomeScreen: React.FC = () => {
  const userInfo = useSelector((state: {user: IUserStore}) => state.user);
  const transactions = useSelector(
    (state: {Transactions: {transactions: ITransaction[]}}) =>
      state.Transactions.transactions,
  );

  const dispatch = useDispatch();

  const addNewTransaction = () => {
    let amount = faker.number.int({max: 500});
    let NewTransaction = {
      date: faker.date.anytime(),
      amount: amount,
      points: amount / 50,
      userEmail: userInfo.userInfo.email,
    };
    dispatch(addTransaction(NewTransaction));
    dispatch(addPoints({points: NewTransaction.points}));
  };

  return (
    <ScrollView>
      <Navbar />
      <CustomButton lable={'New'} onPress={addNewTransaction} />
      {transactions ? (
        transactions.map((transaction, index) => {
          const formattedDate = transaction.date.toISOString().split('T')[0];
          return (
            <Card
              key={index}
              date={formattedDate}
              amount={transaction.amount}
              points={transaction.points}
            />
          );
        })
      ) : (
        <>NO Transactions</>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({});

export default HomeScreen;
