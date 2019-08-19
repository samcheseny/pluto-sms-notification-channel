// Reads env variables off a file and return an object
exports.getEnvVariables = () => {
  let result = {
    TWILIO_ACCOUNT_SID: 'gshywsjgs',
    TWILIO_AUTH_TOKEN: 'AXXXXSXXXX',
    TWILIO_SMS_SID: 'AXXXXSXXXX',
    TWILIO_SMS_RECIPIENTS: '+15558675310'
  }

  try {
    let env = fs.readFileSync('./.env').toString()

    env.split('\n').forEach(variable => {
      let [key, value] = variable.split('=')
      result[key.trim()] = value.trim()
    })
  } catch (error) {}

  return result
}

// Invalid SMS SID
exports.INVALID_TWILIO_SMS_SID = 'invalid'
