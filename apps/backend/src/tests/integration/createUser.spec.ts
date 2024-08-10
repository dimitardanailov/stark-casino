import request from 'supertest'
import mongoose from 'mongoose'

import app from '../../app'
import type {RequestUser} from '../../routes/createUser'

const userData: RequestUser = {
  firstName: 'Stan',
  lastName: 'Lee',
  email: 'stan@marvel.com',
}

describe('POST /users (Integration Test)', () => {
  beforeAll(async () => {
    const mongoUri = 'mongodb://localhost:27017/stark_test_db'
    await mongoose.connect(mongoUri)
  })

  afterAll(async () => {
    await mongoose.connection.db.dropDatabase()
    await mongoose.connection.close()
  })

  it('should create a new user and return a 201 status', async () => {
    const response = await request(app).post('/users').send(userData)

    expect(response.status).toBe(201)
    expect(response.body).toEqual({
      message: 'User created successfully',
      user: expect.objectContaining({
        firstName: userData.firstName,
        lastName: userData.lastName,
        email: userData.email,
      }),
    })
  })

  it('should return a 409 status if email is already in use', async () => {
    const response = await request(app).post('/users').send(userData)

    expect(response.status).toBe(409)
    expect(response.body).toHaveProperty(
      'message',
      'User with this email already exists',
    )
  })

  it('should return a 400 status if user data is invalid', async () => {
    const invalidUserData = {
      name: '',
      email: 'invalidemail',
    }

    const response = await request(app).post('/users').send(invalidUserData)

    expect(response.status).toBe(400)
    expect(response.body).toHaveProperty('message', 'Error creating user')
  })
})
