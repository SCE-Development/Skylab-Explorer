/* eslint-disable func-names */
/* eslint-disable require-await */
/* eslint-disable func-style */
import { GetServerSideProps } from "next";
import { DiscordUser } from "../utils/types";
import { parseUser } from "../utils/parse-user";

interface Props {
  user: DiscordUser;
}

export default function Index(props : Props) {
  const { user } = props;

  return (
    <h1>
      Hey, {user.username}#{user.discriminator}
    </h1>
  );
}

export const getServerSideProps: GetServerSideProps<Props> = async function(ctx) {
  const user = parseUser(ctx);

  if (!user) {
    return {
      redirect: {
        destination: "/api/oauth",
        permanent: false,
      },
    };
  }

  return { props: { user } };
};
