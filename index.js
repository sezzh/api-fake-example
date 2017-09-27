const customers = require('./resources/customers/customers')
const visorDocuments = require('./resources/visorDocuments/index')

const api = {
  customers: customers(),
  visorDocuments: visorDocuments()
}

function generateApi () {
  return api
}

module.exports = generateApi
