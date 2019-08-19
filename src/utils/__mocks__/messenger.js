const TestUtilities = require('../../../__tests__/utils')

class Messenger {
  static sendSMS (config) {
    return new Promise((resolve, reject) => {
      if (config.from === TestUtilities.INVALID_TWILIO_SMS_SID) {
        return reject(new Error('Invalid SID'))
      }

      resolve({})
    })
  }
}

module.exports = Messenger
