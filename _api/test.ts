/*
 * @Date: 2024-09-08 23:51:29
 * @Description: 功能：
 */
import type { VercelRequest, VercelResponse } from "@vercel/node";

export default async function handler(request: VercelRequest, response: VercelResponse) {
  return response.send("test OK");
}