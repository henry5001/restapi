import { Hono } from 'hono'

const app = new Hono()

app.get('/', (c) => {
  return c.text('Hello Nestjs!')
})

app.get('/json', (c) => {
  return c.json({
    "obj1":"001",
    "obj2":"002"
  })
})

export default app
