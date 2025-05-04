import db from "../../../db/index";
import { LOGTO_ISSUER, LOGTO_JWKS_URI, UNAUTHORIZED_MODE } from "@echoai/utils";
import { getVerifiedLogtoUser } from "../../utils/jwt";
import { eq, desc } from "drizzle-orm";
import { table as chats } from '../../../db/chats'

export default defineEventHandler(async (event) => {
  const token = getRequestHeader(event, "Authorization")?.split(" ")[1];

  // if (!token && UNAUTHORIZED_MODE !== "true") {
  //   throw createError({
  //     statusCode: 401,
  //     message: "Unauthorized"
  //   });
  // }

  const jwt = await getVerifiedLogtoUser(token)
  if (!jwt) {
    throw createError({
      statusCode: 401,
      message: "Unauthorized"
    });
  }

  const userId = jwt.sub
  
  const history = await db
    .select({
      uid: chats.uid,
      id: chats.id,
      updated_at: chats.updated_at,      
    })
    .from(chats)
    .where(eq(chats.uid, userId))
    .orderBy(desc(chats.updated_at))

  return history ?? [];
})
