import { GetServerSidePropsContext } from "next";
import { DiscordUser } from "../types/auth";
import { parse } from "cookie";
import { verify } from "jsonwebtoken";
import { config } from "./config";

export function parseUser(ctx: GetServerSidePropsContext): DiscordUser | null {
  if (!ctx.req.headers.cookie) {
    return null;
  }

  const token = parse(ctx.req.headers.cookie)[config.cookieName];

  if (!token) {
    return null;
  }

  try {
    const { iat, exp, ...user } = verify(token, config.jwtSecret) as DiscordUser & { iat: number; exp: number };
    // assign token as user.token and send it as prop
    user.token = token;
    return user;
  } catch (e) {
    return null;
  }
}
