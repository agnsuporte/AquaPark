import styled from 'styled-components';

export const Container = styled.SafeAreaView`
  flex: 1;
  align-items: center;
  background-color: #f2f2f2;
`;

export const Scroll = styled.ScrollView`
  flex: 1;
  width: 99%;
`;

export const Inner = styled.View`
  padding: 5px 10px;
`;

export const SectionHeard = styled.View`
  width: 96%;
  margin: 10px auto;
  background-color: #fff;
  border-radius: 7px;
  padding: 10px;
  flex-direction: row;
`;

export const Button = styled.TouchableOpacity`
  align-items: center;
  background-color: #DDDDDD;
  padding: 6px 10px;
  flex-direction: row;
  justify-content: space-between;
`;

export const InfoHeard = styled.View`
  margin-left: 15px;
  justify-content: space-between;
`;

export const Avatar = styled.Image`
  width: 80px;
  height: 80px;
  border-radius: 7px;
`;

export const Description = styled.Text`
  font-size: 14px;
`;

export const Name = styled.Text`
  font-size: 18px;
  font-weight: bold;
`;

export const Texto = styled.Text`
  font-size: 16px;
  font-weight: 700;
`;
