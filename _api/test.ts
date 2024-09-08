/*
 * @Date: 2024-09-08 21:16:23
 * @Description: 功能：
 */
import type { VercelRequest, VercelResponse } from "@vercel/node";

export const edge = true;

export default async function handler(request: VercelRequest, response: VercelResponse) {
  return response.send("OK");
}