/* eslint-disable func-names */
/* eslint-disable require-await */
/* eslint-disable func-style */
import { GetServerSideProps } from 'next';
import { DiscordUser } from '../types/auth';
import { parseUser } from '../utils/parse-user';

interface Props {
  user: DiscordUser;
}

export default function Landing(props: Props) {
  const { user } = props;

  return (
    <h1>
      Hey, {user.username}#{user.discriminator} token is {user.token}
    </h1>
  );
}

export const getServerSideProps: GetServerSideProps<Props> = async function(ctx) {
  const user = parseUser(ctx);

  if (!user) {
    return {
      redirect: {
        destination: '/api/oauth',
        permanent: false,
      },
    };
  }

  return { props: { user } };
};
