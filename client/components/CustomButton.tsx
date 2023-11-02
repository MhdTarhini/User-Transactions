import React from 'react'
import { StyleSheet, Text, TouchableOpacity, TouchableOpacityProps, View } from 'react-native'

interface  buttonProps extends TouchableOpacityProps{
    lable: string,

}

function CustomButton(props: buttonProps) {
  return (
    <View style={styles.buttonContainer}>
      <TouchableOpacity style={styles.button}>
        <Text>{props.lable}</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    backgroundColor: '#ffc436',
    padding: 10,
    borderRadius: 20
  },
  buttonContainer:{
    padding: 20,
  }
});

export default CustomButton
