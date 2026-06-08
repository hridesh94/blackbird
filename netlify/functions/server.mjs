import server from '../../dist/server/server.js';

export const handler = async (event, context) => {
  const url = new URL(event.rawUrl || event.url, `https://${event.headers.host}`);
  const request = new Request(url, {
    method: event.httpMethod,
    headers: event.headers,
    body:
      event.httpMethod === 'GET' || event.httpMethod === 'HEAD'
        ? null
        : event.body
        ? Buffer.from(event.body, event.isBase64Encoded ? 'base64' : 'utf8')
        : null,
  });

  const response = await server.fetch(request, {}, {});
  const body = Buffer.from(await response.arrayBuffer());

  return {
    statusCode: response.status,
    headers: Object.fromEntries(response.headers),
    body: body.toString('base64'),
    isBase64Encoded: true,
  };
};
