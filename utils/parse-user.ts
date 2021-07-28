import { GetServerSidePropsContext } from "next";
import { DiscordUser } from "../types/auth";
import { parse } from "cookie";
import { verify } from "jsonwebtoken";
import { config } from "./config";

/*
  This check if there's any cookie
  If yes, check if there's any cookie named 'Token'
  If no, return null
  Otherwise return user profile
  Cookie also in the user profile
*/
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

    return user;
  } catch (e) {
    return null;
  }
}
