class Messenger {
  /**
   *
   * @param {Object} config
   *
   * Sends the SMS to the various recipients
   */
  static async sendSMS (config) {
    const client = require('twilio')(config.accountSid, config.authToken)

    const messages = await Promise.all(
      config.to.map(number => {
        return client.messages.create({
          body: config.body,
          from: config.from,
          to: number
        })
      })
    )

    return {}
  }
}

module.exports = Messenger
