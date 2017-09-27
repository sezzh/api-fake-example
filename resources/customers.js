const faker = require('faker')

function generateCustomers () {
  var customers = []

  for (var i = 0; i < 50; i++) {
    let firstName = faker.name.firstName()
    let lastName = faker.name.lastName()
    let phoneNumber = faker.phone.phoneNumberFormat()

    customers.push({
      id: i,
      'first_name': firstName,
      'last_name': lastName,
      'phone': phoneNumber
    })
  }

  return { customers: customers }
}

module.exports = generateCustomers
