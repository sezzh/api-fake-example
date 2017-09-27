const customers = require('./resources/customers')


const api = {
  customers: customers(),
}

function generateApi () {
  return api
}

module.exports = generateApi
