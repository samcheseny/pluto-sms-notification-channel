process.env.NODE_ENV = 'test'
const Channel = require('../src/index')
const TestUtilities = require('./utils')
let log = {}

jest.mock('../src/utils/messenger')

describe('Channel', () => {
  // To run before each the tests
  beforeEach(() => {
    let env = TestUtilities.getEnvVariables()

    // Set the env variables
    process.env.TWILIO_SMS_RECIPIENTS = env.TWILIO_SMS_RECIPIENTS
    process.env.TWILIO_ACCOUNT_SID = env.TWILIO_ACCOUNT_SID
    process.env.TWILIO_AUTH_TOKEN = env.TWILIO_AUTH_TOKEN
    process.env.TWILIO_SMS_SID = env.TWILIO_SMS_SID

    // Reset the log object
    log = {
      timestamp: '01-12-2019 10:10:10.900',
      serverName: 'USEASTERN-001',
      PID: parseInt(Math.random() * 1000),
      usedMemory: parseInt(Math.random() * 1000) + 'MB',
      message: 'This is a sample log message',
      logged: 'This is a sample log message',
      line: 12,
      function: 'getAllUsers',
      filename: 'users.js',
      severity: 'info'
    }
  })

  // To run after each the tests
  afterEach(() => {})

  describe('notify', () => {
    test('should send an SMS', async () => {
      expect.assertions(1)

      const data = await Channel.notify(log)

      expect(data.notified).toBeTruthy()
    })

    test('should not send an SMS on invalid auth details', async () => {
      expect.assertions(1)

      process.env.TWILIO_SMS_SID = TestUtilities.INVALID_TWILIO_SMS_SID

      const data = await Channel.notify(log)

      expect(data.notified).toBeFalsy()
    })

    test('should throw an error on a missing env variable', () => {
      delete process.env.TWILIO_SMS_RECIPIENTS

      expect(() => {
        Channel.notify(log)
      }).toThrow()
    })

    test('should throw an error on an empty env variable', () => {
      process.env.TWILIO_SMS_RECIPIENTS = ''

      expect(() => {
        Channel.notify(log)
      }).toThrow()
    })

    test('should throw an error on a missing log property', () => {
      delete log.PID

      expect(() => {
        Channel.notify(log)
      }).toThrow()
    })

    test('should throw an error on an empty log property', () => {
      log.serverName = ''

      expect(() => {
        Channel.notify(log)
      }).toThrow()
    })
  })
})
