export const validateRules = {
  required: (value) => {
    if (typeof value === 'boolean') return value
    return value.trim() !== ''
  },
  birthYear: (value) => {
    const year = Number(value)
    return !!(year && year < new Date().getFullYear() && year > 1900)
  },
  url: (value) => /https?:\/\/\S+\.\S+/g.test(value),
  telegramNick: (value) => /@\S+/g.test(value)
}
