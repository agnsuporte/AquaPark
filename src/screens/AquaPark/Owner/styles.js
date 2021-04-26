import styled from 'styled-components';

export const Container = styled.SafeAreaView`
  flex: 1;
  justify-content: center;
  background-color: #f2f2f2;
`;

export const Page = styled.ScrollView``;

export const Title = styled.Text`
  font-size: 25px;
  font-weight: 700;
  margin-bottom: 50px;
`;

export const Inner = styled.View`
  padding: 20px;
  height: 100%;
  justify-content: space-between;
`;

export const InputMultLine = styled.TextInput`
  padding: 10px;
  text-align-vertical: top;
  margin-vertical: 12px;
  border-width: 1px;
  border-radius: 7px;
  border-color: #2d9cdb;
  background-color: #fff;
`;

export const Actions = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 30px;
  margin-bottom: 15px;
`;

export const ImageItemSelect = styled.Image`
  height: 330px;
  width: 305px;
  margin-right: 10px;
  background-color: #828282;
`;

export const ReturnButton = styled.TouchableOpacity`
  width: 100%;
  align-items: center;
  background-color: #56ccf2;
  padding: 10px;
`;

export const ReturnButtonText = styled.Text`
  color: #fff;
  font-weight: 500;
`;
