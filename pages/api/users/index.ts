import { NextApiRequest, NextApiResponse } from 'next'
import { prisma } from '../../../lib/db'


export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const {method} = req

  switch(method) {
    case 'POST': {
      try {
        const user = await prisma.user.create(req.body)
        res.status(200).json({succuss: true, data: user})
      } catch (error) {
        res.status(500).json({succuss: true, data: error})
      }
    }
    default: {
      try {
        const users = await prisma.user.findMany()
        res.json(users)
      } catch(error) {
        res.status(500).json({succuss: true, data: error})
      }
    }
  }
}