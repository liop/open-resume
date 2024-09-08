/*
 * @Date: 2024-09-08 21:16:23
 * @Description: 功能：
 */
export const config = {
  runtime: 'edge',
};
 
export default (request: Request) => {
  return new Response(`Hello, from ${request.url} I'm now an Edge Function!`);
};