import React from 'react';
import ChangeName from './ChangeName';
import ChangePassword from './ChangePassword';
import ChangeEmail from './ChangeEmail';
import DeleteAccount from './DeleteAccount';

const EditAccount = () => (
  <>
    <ChangeEmail />
    <ChangeName />
    <ChangePassword />
    <DeleteAccount/>
  </>
);

export default EditAccount;
