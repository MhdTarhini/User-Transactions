import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';

interface Props {
  date: Date;
  amount: number;
  points: number;
}

const Card: React.FC<Props> = ({date, amount, points}) => {
  const formattedDate = date.toISOString().split('T')[0];
  return (
    <ScrollView>
      <View style={styles.cardContainer}>
        <View style={styles.cardRow}>
          <Text>Date: {formattedDate}</Text>
        </View>
        <View style={styles.cardRow}>
          <Text>Amount: ${amount}</Text>
        </View>
        <View style={styles.cardRow}>
          <Text>Points: {points}</Text>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    margin: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  cardRow: {
    marginBottom: 10,
  },
});

export default Card;
