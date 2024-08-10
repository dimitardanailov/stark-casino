import mongoose, {Document, Schema} from 'mongoose'

interface IUser extends Document {
  firstName: string
  lastName: string
  email: string
  registeredAt: Date
}

const UserSchema: Schema = new Schema({
  firstName: {type: String, required: true},
  lastName: {type: String, required: true},
  email: {type: String, required: true, unique: true},
  registeredAt: {type: Date, default: Date.now},
  createdAt: {type: Date, default: Date.now},
  updatedAt: {type: Date, default: Date.now},
})

const User = mongoose.model<IUser>('User', UserSchema)

export default User
