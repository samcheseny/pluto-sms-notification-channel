const TestUtilities = require('../__tests__/utils')

class Twilio {
  constructor (accountSid, authToken) {}

  get messages () {
    return {
      async create (sms) {
        if (sms.from === TestUtilities.INVALID_TWILIO_SMS_SID) {
          throw new Error('Invalid SID')
        }

        return {}
      }
    }
  }
}

module.exports = (a, b) => new Twilio(a, b)
