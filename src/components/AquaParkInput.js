import React from 'react';
import styled from 'styled-components/native';

const Input = styled.TextInput`
  flex: 1;
  height: 40px;
  font-size: 14px;
  padding-left: 10px;
  color: #2d9cdb;
  border-radius: 7px;
  border: 1px solid #2d9cdb;
  margin-bottom: 10px;
`;

const AquaParkInput = props => {
  const {placeholder, value, onChangeText, keyboardType, password} = props;

  return (
    <Input
      value={value}
      onChangeText={onChangeText}
      placeholder={placeholder}
      placeholderTextColor="#2d9cdb"
      autoCapitalize="none"
      autoCorrect={false}
      keyboardType={keyboardType}
      secureTextEntry={password}
    />
  );
};

export default AquaParkInput;
