import {Request, Response} from 'express'

function health(req: Request, res: Response) {
  res.send({
    message: 'server',
  })
}

export default health
