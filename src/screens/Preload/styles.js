import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: #2d9cdb;
`;

export const TinyLogo = styled.Image`
  width: 50px;
  height: 50px;
`;

export const TinyLogoArea = styled.View`
  width: 70px;
  height: 70px;
  border-radius: 50px;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  margin-bottom: 15px;
`;

export const TextAWait = styled.Text`
  color: #fff;
  margin-bottom: 15px;
`;

export const LoadingIcon = styled.ActivityIndicator`
  margin-top: 50px;
`;
