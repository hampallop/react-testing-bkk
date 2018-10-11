const crypto = require('crypto')

const generateToken = () => crypto.randomBytes(16).toString('hex')

module.exports = (req, res, next) => {
  const db = require('./db.json')

  if (req.method === 'GET' && req.path === '/auth/me') {
    const {authorization} = req.headers
    if (authorization) {
      const [, token] = authorization.split(' ')
      const userExists = db.users.find(user => user.token === token)
      if (userExists) {
        res
          .status(200)
          .json({username: userExists.username, token: userExists.token})
        return next()
      }
    }
    return res.status(400).json({message: 'Invalid token.'})
  }

  if (req.method === 'POST' && req.path === '/users') {
    const {username} = req.body
    const userExists = db.users.find(
      user => user.username.toLowerCase() === username.toLowerCase(),
    )
    if (userExists) {
      return res.status(400).json({message: 'User already exists.'})
    }
    req.body.token = generateToken()
    return next()
  }

  if (req.method === 'POST' && req.path === '/login') {
    const {username, password} = req.body
    const userExists = db.users.find(
      user => user.username === username && user.password === password,
    )
    if (userExists) {
      res
        .status(200)
        .json({username: userExists.username, token: userExists.token})
      return next()
    }
    return res.status(400).json({message: 'Password incorrect.'})
  }

  next()
}
