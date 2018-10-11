const faker = require('faker')

function generateUserData() {
  return {
    username: faker.internet.userName(),
    password: faker.internet.password(),
  }
}

module.exports = {
  generateUserData,
}
