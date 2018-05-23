const generateTransactions = require('../transactions')
const { TRANSACTION_TYPES } = require('../../../../client/lib/constants')

module.exports = (network, testWallet, quantity = 10) => {
  return generateTransactions(
    network,
    TRANSACTION_TYPES.DELEGATE_REGISTRATION,
    testWallet,
    undefined,
    undefined,
    quantity
  )
}