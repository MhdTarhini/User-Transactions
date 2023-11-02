import React, { useState } from 'react'
import { StyleSheet, Text, TextInput, View } from 'react-native'

function CustomInput() {
    const [text, onChangeText]= useState('')
  return (
    <View>
        
      <Text style={styles.textInputStyle}>Email</Text>
      <TextInput
        style={styles.inputStyle}
        onChangeText={onChangeText}
        value={text}
        placeholder="Email"
      />
    </View>
  )
}

const styles = StyleSheet.create({
    textInputStyle:{
        color: "#000000",
        fontSize: 18,
        padding: 10
    },
    inputStyle:{
        backgroundColor:'#D3D3D3',
        height: 50,
        borderRadius: 20,
        paddingHorizontal: 10
    }
});

export default CustomInput
