const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
import getConfig from 'next/config';

import { apiHandler } from '../api/api-handler';
import { usersRepo } from '../api/users-repo';

const { serverRuntimeConfig } = getConfig();

export default apiHandler({
    post: authenticate
});

function authenticate(req, res) {
    const { username, password } = req.body;
    const user = usersRepo.find(u => u.username === username);
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