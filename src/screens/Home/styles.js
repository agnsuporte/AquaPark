import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: #f2f2f2;
`;

export const LocationArea = styled.View`
  flex-direction: row;
  margin-top: 15px;
  padding: 0 10px;
`;

export const LocationInput = styled.TextInput.attrs({
  placeholderTextColor: '#999',
})`
  flex: 1;
  padding: 11px 10px;
  border-radius: 4px;
  font-size: 16px;
  color: #333;
  background-color: #fff;
  border: 2px solid ${props => (props.error ? '#ff7272' : '#fff')};
`;

export const LocationFinder = styled.TouchableOpacity`
  background: #2d9cdb;
  margin-left: 10px;
  justify-content: center;
  border-radius: 4px;
  padding: 0 14px;
`;

export const LocationFinderIcon = styled.Image`
  width: 25px;
  height: 25px;
`;

export const ListArea = styled.FlatList`
  margin-top: 10px;
  margin-bottom: 10px;
  padding: 0 10px;
`;
