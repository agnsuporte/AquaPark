import React from 'react';
import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: #2d9cdb;
`;

export const TextAWait = styled.Text`
  color: #fff;
  margin-bottom: 15px;
`;

export const LoadingIcon = styled.ActivityIndicator`
  margin-top: 50px;
`;

const PendingView = () => (
  <Container>
    <LoadingIcon size="large" />
    <TextAWait>Aguarde...</TextAWait>
  </Container>
);

export default PendingView;
