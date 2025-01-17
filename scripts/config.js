window.CONFIG = {
  TERMINAL: {
    NUM_CHARS_TO_MARK: 28,
    REGEX: {
      ALPHANUMERIC: /[a-zA-Z0-9]/
    }
  },
  STORAGE: {
    KEYS: {
      ATTEMPTS: 'unlockAttempts',
      MARKED_CHARS: 'originalMarkedChars'
    }
  },
  MESSAGE: {
    TYPES: {
      ERROR: 'error',
      SUCCESS: 'success',
      INFO: 'info'
    },
    TIMEOUT: {
      DEFAULT: 5000,
      ERROR: 3000
    }
  }
};
