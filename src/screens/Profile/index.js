import React from 'react';
import type {Node} from 'react';
import {connect} from 'react-redux';

import {Container, Texto} from './styles';

const Profile: () => Node = props => {
  const {id, name, email, phone} = props;

  return (
    <Container>
      <Texto>Profile Screen</Texto>
      <Texto>ID: {id} </Texto>
      <Texto>NAME: {name} </Texto>
      <Texto>E-MAIL: {email} </Texto>
      <Texto>PHONE: {phone} </Texto>
    </Container>
  );
};

const mapStateToProps = state => {
  return {
    id: state.user.id,
    name: state.user.name,
    email: state.user.email,
    phone: state.user.phone,
  };
};

const ProfileConnect = connect(mapStateToProps)(Profile);

export default ProfileConnect;
