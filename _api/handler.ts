/*
 * @Date: 2024-09-08 21:16:23
 * @Description: 功能：
 */
import type { VercelRequest, VercelResponse } from '@vercel/node';
 
export default function handler(
  request: VercelRequest,
  response: VercelResponse,
) {
  response.status(200).json({
    body: request.body,
    query: request.query,
    cookies: request.cookies,
  });
}