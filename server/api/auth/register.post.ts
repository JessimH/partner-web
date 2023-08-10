import { sendError } from "h3";
import { createUser } from "../db/users";
import { userTransformer } from "../../transformers/user";

export default defineEventHandler(async (event) => {
  const body = await readBody(event);

  const { username, name, email, password, repeatPassword } = body;

  if (!username || !name || !email || !password || !repeatPassword) {
    return sendError(
      event,
      createError({
        statusCode: 400,
        statusMessage: "Invalid params",
      })
    );
  }

  if (password !== repeatPassword) {
    return sendError(
      event,
      createError({
        statusCode: 400,
        statusMessage: "Passwords don't match",
      })
    );
  }

  const userData = {
    username,
    name,
    email,
    password,
    profileImage: "https:picsum.photos/200/200",
  };

  const user = await createUser(userData);

  return {
    body: userTransformer(user),
  };
});
