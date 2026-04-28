import { Hono } from 'hono'
import product from './product/product'
import user from './user/user'

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

app.route('/users', user)
app.route('/products', product)

export default app
