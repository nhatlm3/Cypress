
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { request } from 'http'
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  email: string,
  password: string
}

// export default function login(
//   req: NextApiRequest,
//   res: NextApiResponse
// ) {
//   const email = 'nhatlm@icd-vn.com';
//   const password = 'Nhat.123456'
//   if (req.body.email != email || req.body.password != password) {
//     res.status(400).send({ message: 'email or password is incorect' })
//   }
//   res.status(200).send({ email: req.body.email, password: req.body.password })
// }
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
import getConfig from 'next/config';

import { apiHandler } from '../api/api-handler';
import { usersRepo } from '../api/users-repo';

const { serverRuntimeConfig } = getConfig();

export default apiHandler({
    post: authenticate
});

function authenticate(req: any, res: any) {
    const { username, password } = req.body;
    const user = usersRepo.find((u: any) => u.username === username);

    // validate
    if (!(user && password === user.password)) {
        throw 'Username or password is incorrect';
    }

    // create a jwt token that is valid for 7 days
    //const token = jwt.sign({ sub: user.id }, serverRuntimeConfig.secret, { expiresIn: '7d' });

    // return basic user details and token
    return res.status(200).json({
        id: user.id,
        username: user.username
    });
}