import request from 'supertest'
import app from '../../app'

describe('GET /health (Integration Test)', () => {
  it('should return a 200 status and a message', async () => {
    const response = await request(app).get('/health')

    expect(response.status).toBe(200)
    expect(response.body).toEqual({message: 'server'})
  })
})
