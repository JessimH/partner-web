import { getUserByUsername } from "../../db/users";
import bcrypt from "bcrypt";
import { generateTokens, sendRefreshToken } from "../../utils/jwt";
import { userTransformer } from "../../transformers/user";
import { createRefreshToken } from "../../db/refreshToken";
import { sendError } from "h3";

export default defineEventHandler(async (event) => {
  const body = await readBody(event);

  const { username, password } = body;

  if (!username || !password) {
    return sendError(
      event,
      createError({
        statusCode: 400,
        statusMessage: "Invalid params",
      })
    );
  }

  // Is the user in the database?
  const user = await getUserByUsername(username);

  if (!user) {
    return sendError(
      event,
      createError({
        statusCode: 400,
        statusMessage: "Username or password is invalid",
      })
    );
  }

  // Compare the password with the hashed password in the database
  const passwordMatch = await bcrypt.compare(password, user.password);

  if (!passwordMatch) {
    return sendError(
      event,
      createError({
        statusCode: 400,
        statusMessage: "Username password is invalid",
      })
    );
  }

  // Create a JWT token
  // Create a JWT token :  access token and refresh token
  const { accessToken, refreshToken } = generateTokens(user);

  // Save the refresh token in the database
  await createRefreshToken({
    token: refreshToken,
    userId: user.id,
  });

  // add httpOnly cookie
  sendRefreshToken(event, refreshToken);

  return {
    access_token: accessToken,
    user: userTransformer(user),
  };
});
