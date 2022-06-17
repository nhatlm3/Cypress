// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { request } from 'http'
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  email: string,
  password: string
}

export default function register(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json({ email: req.body.email, password: req.body.password })
}
