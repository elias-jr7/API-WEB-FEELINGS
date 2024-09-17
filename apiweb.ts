import { Hono } from 'hono'
import {serveStatic} from 'hono/bun'
const ACCESS_TOKEN = process.env.ACCESS_TOKEN;
const app = new Hono()

app.get('/api/token', (c) => {
  return c.json({ token: `Bearer ${ACCESS_TOKEN}` });
});

app.use('/*',serveStatic({root:'./src'}))

const port = parseInt(process.env.PORT!) || 80
console.log(`Running at http://localhost:${port}`)

export default {
  port,
  fetch: app.fetch,
}
