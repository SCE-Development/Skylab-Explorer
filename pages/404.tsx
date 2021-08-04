import Link from 'next/link';
import React from 'react';
import Image from '../public/nomineeJerry.jpg';
import Icon from '../public/favicon.ico';
import Grid from '@material-ui/core/Grid';
export default function Custom404() {
  return (
    <Grid alignItems="center">
      <div>
        <h1>404 - That Page Is Not Found, But You have Found Something Else...</h1>
        <img
          src="/nomineeJerry.jpg"
          margin-left="auto"
          height="500"
          // onError={(event) => (event.target.style.display = 'none')}
        />
        <h2>In the meantime, please refer to one of our other pages</h2>

        <li>
          <Link href="/dashboard">
            <a>Dashboard</a>
          </Link>
        </li>
        <li>
          <Link href="/graphs">
            <a>Graphs</a>
          </Link>
        </li>
        <li>
          <Link href="/landing">
            <a>Landing</a>
          </Link>
        </li>
      </div>
    </Grid>
  );
}
