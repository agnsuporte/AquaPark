import styled from 'styled-components/native';

export const Container = styled.KeyboardAvoidingView`
  flex: 1;
`;

export const BodyArea = styled.View`
  flex: 1;
  padding: 24px;
`;

export const Title = styled.Text`
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 35px;
`;

export const SocialNetworks = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const SocialButton = styled.TouchableOpacity`
  padding: 15px;
  width: 140px;
  margin-vertical: 5px;
  background-color: #737373;
`;

export const SocialText = styled.Text`
  color: #fff;
  font-size: 16px;
  text-align: center;
  font-weight: 700;
`;

export const ErroText = styled.Text`
  font-size: 18px;
  color: red;
`;

export const Input = styled.TextInput`
  height: 40px;
  padding: 10px;
  margin-vertical: 12px;
  border-width: 1px;
  border-radius: 7px;
  border-color: #2d9cdb;
  background-color: #fff;
`;

export const Forguet = styled.TouchableOpacity`
  padding: 8px;
  margin-vertical: 10px;
`;

export const Button = styled.TouchableOpacity`
  padding: 15px;
  margin-vertical: 6px;
  border-width: 1px;
  border-radius: 7px;
  border-color: #2d9cdb;
  background-color: #2d9cdb;
`;

export const LoadArea = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: #2d9cdb;
`;

export const LoadingText = styled.Text`
  font-size: 20px;
  color: #fff;
  font-style: italic;
  font-weight: 700;
`;
