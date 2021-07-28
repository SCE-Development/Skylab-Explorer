/* eslint-disable @typescript-eslint/no-shadow */
import fetch from "node-fetch";
import { serialize } from "cookie";
import { config } from "../../utils/config";
import { sign } from "jsonwebtoken";
import { DiscordUser } from "../../types/auth";
import { NextApiRequest, NextApiResponse } from "next";

const scope = ["identify"].join(" ");
const REDIRECT_URI = `${config.appUri}/api/oauth`;

/*
  This function first request access_token
  Then using that access_token to get DiscordUser profile
  If it got DiscordUser, redirect to "/"
  We pass the token as a part of DiscordUser profile to "/" as props
  So that we can pass access_token as well in /utils/parse-user file
*/
const OAUTH_QS = new URLSearchParams({
  client_id: config.clientId,
  redirect_uri: REDIRECT_URI,
  response_type: "code",
  scope,
}).toString();

const OAUTH_URI = `https://discord.com/api/oauth2/authorize?${OAUTH_QS}`;

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== "GET") return res.redirect("/");

  const { code = null, error = null } = req.query;

  if (error) {
    return res.redirect(`/?error=${req.query.error}`);
  }

  if (!code || typeof code !== "string") return res.redirect(OAUTH_URI);

  const body = new URLSearchParams({
    client_id: config.clientId,
    client_secret: config.clientSecret,
    grant_type: "authorization_code",
    redirect_uri: REDIRECT_URI,
    code,
    scope,
  }).toString();

  // get access token
  const { access_token = null, token_type = "Bearer" } = await fetch("https://discord.com/api/oauth2/token", {
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    method: "POST",
    body,
  }).then((res) => res.json());

  if (!access_token || typeof access_token !== "string") {
    return res.redirect(OAUTH_URI);
  }

  // then get discord user profile
  const me: DiscordUser | { unauthorized: true } = await fetch("http://discord.com/api/users/@me", {
    headers: { Authorization: `${token_type} ${access_token}` },
  }).then((res) => res.json());

  if (!("id" in me)) {
    return res.redirect(OAUTH_URI);
  }

  me.token = access_token;
  // once it got the discord user, sign as json web token
  const token = sign(me, config.jwtSecret, { expiresIn: "24h" });

  res.setHeader(
    "Set-Cookie",
    serialize(config.cookieName, token, {
      httpOnly: true,
      secure: process.env.NODE_ENV !== "development",
      sameSite: "lax",
      path: "/dashboard",
    })
  );

  res.redirect("/dashboard");
};
