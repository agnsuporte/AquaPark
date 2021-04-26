import React from 'react';
import styled from 'styled-components/native';

const ItemArea = styled.TouchableOpacity`
  background-color: #fff;
  margin-bottom: 10px;
  border-radius: 7px;
  padding: 10px;
  flex-direction: row;
`;

const Avatar = styled.Image`
  width: 65px;
  height: 65px;
  border-radius: 7px;
`;

const InfoArea = styled.View`
  margin-left: 15px;
  justify-content: space-between;
`;

const Name = styled.Text`
  font-size: 16px;
  font-weight: bold;
`;

const Address = styled.Text`
  font-size: 12px;
`;

const SeeProfileButton = styled.View`
  width: 85px;
  height: 20px;
  border: 1px solid #4eadbe;
  border-radius: 7px;
  justify-content: center;
  align-items: center;
`;

const SeeProfileButtonText = styled.Text`
  font-size: 13px;
  color: #268596;
`;

const AquaParkItem = ({item}) => {
  const {name, address, avatar} = item;

  const addr = text => {
    return text.length > 35 ? `${text.substring(0, 38 - 3)}...` : text;
  };

  return (
    <ItemArea>
      <Avatar source={{uri: avatar}} />
      <InfoArea>
        <Name>{name}</Name>
        <Address>{addr(address)}</Address>
        <SeeProfileButton>
          <SeeProfileButtonText>Ver Perfil</SeeProfileButtonText>
        </SeeProfileButton>
      </InfoArea>
    </ItemArea>
  );
};

export default AquaParkItem;
