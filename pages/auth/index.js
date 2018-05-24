import React from 'react';

import User from '../../components/User';

const authIndexPage = ({ appName }) => (
  <div>
    <h1>The auth index page of {appName}</h1>
    <User name="Igor" age={28} />
  </div>
);

authIndexPage.getInitialProps = context => ({ appName: 'Super App (Auth)' });

export default authIndexPage;
