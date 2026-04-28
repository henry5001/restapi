import { Hono } from 'hono'

const user = new Hono()

user.get('/', (c) => c.text('User List'))
user.get('/:id', (c) => c.text(`User ID: ${c.req.param('id')}`))

export default user