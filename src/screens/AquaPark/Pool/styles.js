import styled from 'styled-components';

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: #f2f2f2;
`;

export const ScrollContent = styled.ScrollView`
  flex: 1;
`;

export const Content  = styled.View`
  padding: 15px 0;
`;

export const Item = styled.View`
  width: 96%;
  margin: 5px auto;
  background-color: #fff;
  border-radius: 7px;
  padding: 10px;
`;

export const Button = styled.TouchableOpacity`
  align-items: center;
  background-color: #DDDDDD;
  padding: 10px;
  flex-direction: row;
  justify-content: space-between;
`;

export const Label = styled.Text`
  font-size: 14px;
  font-weight: 700;
  padding-left: 15px;
`;

export const Description = styled.Text`
  font-size: 14px;
  padding-left: 15px;
`;

export const Text = styled.Text`
  font-size: 14px;
  font-weight: 700;
`;

export const Input = styled.TextInput`
  height: 30px;
  padding: 3px 15px;
  margin: 12px 0;
  text-align: right;
  border-bottom-width: 1px;
  border-radius: 7px;
  border-color: #2d9cdb;
  background-color: #fff;
`;
