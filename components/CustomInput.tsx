import React, { useState } from 'react'
import { StyleSheet, Text, TextInput, View } from 'react-native'

type CustomInputProps = {
  label: string;
  placeholder: string;
  isPassword: boolean;
  onChangeText: (text: string) => void;
};

function CustomInput(props: CustomInputProps) {
  const [text, setText] = useState('');

  const handleTextChange = (inputText: string) => {
    setText(inputText);
    props.onChangeText(inputText);
  };
  return (
    <View style={styles.inputContainer}>
      <Text style={styles.textInputStyle}>{props.label}</Text>
      <TextInput
        style={styles.inputStyle}
        onChangeText={handleTextChange}
        value={text}
        placeholder={props.placeholder}
        secureTextEntry={props.isPassword}
      />
    </View>
  );
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
    },
    inputContainer:{
        paddingHorizontal: 20,
        paddingVertical: 10
    }
});

export default CustomInput
