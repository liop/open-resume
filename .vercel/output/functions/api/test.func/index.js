// _api/test.ts
var edge = true;
async function handler(request, response) {
  return response.send("OK");
}
export {
  handler as default,
  edge
};
