import styled from "styled-components/native";
import { StyleSheet } from "react-native";

export const Container = styled.View`
  background: #1a1a1a;
  align-items: center;
  flex-direction: column;
  height: 100%;
`;
export const ContTitle = styled.View`
  flex-direction: row;
  align-items: center;

  padding: 55px;
`;
export const Title = styled.Text`
  font-size: 45px;
`;

export const Logo = styled.View`
  background: #0d0d0d;
  align-items: center;
  height: 190;
  width: 100%;
`;
export const Input = styled.TextInput`
  padding: 10px;
  width: 70%;
  height: 60;
  background-color: #333333;
  border-radius: 5;
  margin: 2px;
`;

export const From = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin: 10px;
`;

export const Sumary = styled.View`
  width: 100%;
  margin: 40px 0 30px 0;
  flex-direction: row;
  justify-content: space-around;
`;

export const ListCards = styled.View`
  justify-content: center;
`

export const Button = styled.TouchableOpacity`
  width: 55px;
  height: 55px;
  background-color: #1E6F9F;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  margin: 5px;
`;
