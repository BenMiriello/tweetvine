import React from 'react';

import Page from '../Page';
import ChangeName from './ChangeName';
import ChangePassword from './ChangePassword';
import ChangeEmail from './ChangeEmail';
import DeleteAccount from './DeleteAccount';

const EditAccount = () => (
  <Page nav>
    <ChangeEmail />
    <ChangeName />
    <ChangePassword />
    <DeleteAccount/>
  </Page>
);

export default EditAccount;
