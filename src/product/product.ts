import { Hono } from 'hono'

const product = new Hono()

product.get('/', (c) => c.json({ products: [] }))
product.post('/add', (c) => c.text('Add Product'))

export default product