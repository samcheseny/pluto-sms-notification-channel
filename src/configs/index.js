/**
 * A list of the accepted log levels
 */
exports.ACCEPTED_LOG_LEVELS = ['emergency', 'error', 'warning', 'info', 'debug']

/**
 * Required properties in the env object
 */
exports.REQUIRED_ENV_PROPERTIES = [
  'TWILIO_ACCOUNT_SID',
  'TWILIO_AUTH_TOKEN',
  'TWILIO_SMS_SID',
  'TWILIO_SMS_RECIPIENTS'
]

/**
 * Required properties in the received log object
 */
exports.REQUIRED_LOG_PROPERTIES = [
  'timestamp',
  'serverName',
  'PID',
  'usedMemory',
  'message',
  'logged',
  'line',
  'function',
  'filename',
  'severity'
]

/**
 * Color codes for each log level
 */
exports.SEVERITY_COLOR_CODE = {
  emergency: '#dc3545',
  error: '#28a745',
  warning: '#ffc107',
  info: '#4fc08d',
  debug: '#6c757d'
}
