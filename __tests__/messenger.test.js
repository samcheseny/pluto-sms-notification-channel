process.env.NODE_ENV = 'test'
const Messenger = require('../src/utils/messenger')
const TestUtilities = require('./utils')
let SMS = {}

jest.mock('twilio')

describe('Messenger', () => {
  // To run before each test
  beforeEach(() => {
    SMS = {
      accountSid: 'AAXXXXXXXXX',
      authToken: 'KKLLCCCCCCC',
      from: '+15017122661',
      to: ['+15558675310'],
      body: 'This is the sample message'
    }
  })

  // To run after each test
  afterEach(() => {})

  describe('sendSMS', () => {
    test('should return a promise that resolves to an empty object', async () => {
      expect.assertions(1)

      let data = await Messenger.sendSMS(SMS)

      expect(data).toMatchObject({})
    })

    test('should throw an error on invalid Twilio credentials', async () => {
      expect.assertions(1)

      SMS.from = TestUtilities.INVALID_TWILIO_SMS_SID

      await expect(Messenger.sendSMS(SMS)).rejects.toThrow()
    })
  })
})
