/*
 * @Author: maozhixin maozx@aeroht.com
 * @Date: 2024-06-05 11:16:53
 * @LastEditors: maozhixin maozx@aeroht.com
 * @LastEditTime: 2024-06-05 11:17:06
 * @FilePath: \nextjs-dashboard\middleware.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import NextAuth from 'next-auth';
import { authConfig } from './auth.config';

export default NextAuth(authConfig).auth;

export const config = {
  // https://nextjs.org/docs/app/building-your-application/routing/middleware#matcher
  matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)'],
};
