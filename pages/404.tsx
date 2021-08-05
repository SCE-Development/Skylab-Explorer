import Link from 'next/link';
import React from 'react';
import Image from '../public/nomineeJerry.jpg';
import Icon from '../public/favicon.ico';
import Grid from '@material-ui/core/Grid';
import LeftDrawer from '../Components/LeftDrawer';

export default function Custom404() {
  return (
    <Grid align="center">
      <LeftDrawer />

      <div>
        <h1>404 - That Page Is Not Found, But You have Found Something Else...</h1>
        <img
          src="/nomineeJerry.jpg"
          margin-left="auto"
          height="500"
          onError={(event) => (event.target.style.display = 'none')}
        />
        <h2>In the meantime, please refer to one of our other pages</h2>
      </div>
    </Grid>
  );
}
