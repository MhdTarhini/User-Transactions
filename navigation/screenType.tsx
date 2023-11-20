import type { NativeStackScreenProps } from '@react-navigation/native-stack';

type RootStackParamList = {
  Signin: undefined;
  Signup: { userId: string };
};

type screenProps = NativeStackScreenProps<RootStackParamList>;