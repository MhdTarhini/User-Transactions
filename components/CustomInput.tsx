import React, { useState } from 'react'
import {
  KeyboardTypeOptions,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';

type CustomInputProps = {
  label: string;
  placeholder: string;
  isPassword: boolean;
  onChangeText: (text: string) => void;
  keyboardType: KeyboardTypeOptions;
};

function CustomInput(props: CustomInputProps) {
  const [text, setText] = useState('');

  const handleTextChange = (inputText: string) => {
    setText(inputText);
    props.onChangeText(inputText);
  };
  return (
    <View>
      <Text style={styles.textInputStyle}>{props.label}</Text>
      <TextInput
        style={styles.inputStyle}
        onChangeText={handleTextChange}
        value={text}
        placeholder={props.placeholder}
        secureTextEntry={props.isPassword}
        keyboardType={props.keyboardType}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  textInputStyle: {
    color: '#000000',
    fontSize: 18,
    padding: 10,
  },
  inputStyle: {
    backgroundColor: '#D3D3D3',
    height: 50,
    borderRadius: 20,
    paddingHorizontal: 10,
  },
  inputContainer: {},
});

export default CustomInput
