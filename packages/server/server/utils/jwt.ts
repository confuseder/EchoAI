// server/utils/getVerifiedLogtoUser.ts
import jwt from 'jsonwebtoken';
import jwksClient from 'jwks-rsa';
import { H3Event } from 'h3';
import { LOGTO_APP_ID, LOGTO_JWKS_URI, LOGTO_ISSUER } from '@echoai/utils';

const JWKS_URI = LOGTO_JWKS_URI;
const APP_ID = LOGTO_APP_ID;
const ISSUER = LOGTO_ISSUER;

const client = jwksClient({ jwksUri: JWKS_URI });

// types/logto.d.ts

export interface LogtoUser {
  // 标准的 JWT claims
  sub: string;          // 用户唯一标识符
  email?: string;       // 用户电子邮件
  name?: string;        // 用户姓名
  picture?: string;     // 用户头像 URL
  aud: string;          // 应用标识（你的 Logto App ID）
  iss: string;          // 签发者（应该是你的 Logto endpoint）
  exp: number;          // 过期时间（Unix 时间戳）
  iat: number;          // 签发时间（Unix 时间戳）

  // 其他你可能需要的自定义 claim（如果你在 Logto 配置了）
  [key: string]: any;   // 支持其他动态属性
}


function getKey(header: jwt.JwtHeader, callback: jwt.SigningKeyCallback) {
  client.getSigningKey(header.kid!, (err, key) => {
    if (err) return callback(err, undefined);
    const signingKey = key.getPublicKey();
    callback(null, signingKey);
  });
}

export async function getVerifiedLogtoUser(token: string): Promise<false | LogtoUser> {
  if (!token) return false;

  try {
    const payload = await new Promise<jwt.JwtPayload>((resolve, reject) => {
      jwt.verify(
        token,
        getKey,
        {
          audience: APP_ID,
          issuer: ISSUER,
          algorithms: ['ES384'],
        },
        (err, decoded) => {
          if (err || typeof decoded !== 'object') return reject(err || new Error('Invalid token'));
          resolve(decoded as LogtoUser);
        }
      );
    });

    return payload as LogtoUser;
  } catch {
    return false;
  }
}
