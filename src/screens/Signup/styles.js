import styled from 'styled-components/native';

export const Container = styled.KeyboardAvoidingView`
  flex: 1;
  background-color: #f2f2f2;
`;

export const Inner = styled.View`
  flex: 1;
  padding: 20px;
`;

export const Title = styled.Text`
  font-size: 25px;
  font-weight: 700;
  margin-bottom: 30px;
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

export const ButtonContainer = styled.View`
  margin-top: 12px;
  background-color: white;
`;

export const Loading = styled.View`
  flex: 1;
  align-items: center;
  justify-ontent: center;
  background-color: #2d9cdb;
`;

export const LoadingText = styled.Text`
  font-size: 20px;
  color: #fff;
  font-style: italic;
  font-weight: 700;
`;

export const ErrorText = styled.Text`
  font-size: 16px;
  color: red;
`;
