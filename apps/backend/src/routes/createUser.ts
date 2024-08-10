import {Request, Response} from 'express'
import User from '../models/User'

export type RequestUser = {
  firstName: string
  lastName: string
  email: string
}

async function createUser(req: Request, res: Response) {
  try {
    const requestUser = req.body as RequestUser

    const firstName = requestUser.firstName.trim()
    const lastName = requestUser.lastName.trim()
    const email = requestUser.email.trim()

    const existingUser = await User.findOne({email})

    if (existingUser) {
      return res
        .status(409)
        .send({message: 'User with this email already exists'})
    }

    const user = new User({firstName, lastName, email})
    await user.save()

    res.status(201).send({message: 'User created successfully', user})
  } catch (error) {
    res.status(400).send({message: 'Error creating user', error})
  }
}

export default createUser
