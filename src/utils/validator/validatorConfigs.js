export const editStudentValidatorConfig = {
  name: {
    required: {
      message: 'Поле "Имя" обязательно для заполнения'
    },
  },
  lastName: {
    required: {
      message: 'Поле "Фамилия" обязательно для заполнения'
    }
  },
  birth: {
    required: {
      message: 'Поле "Год рождения" обязательно для заполнения'
    },
    birthYear: {
      message: 'Поле "Год рождения" некорректно'
    }
  },
  portfolioUrl: {
    required: {
      message: 'Поле "Портфолио" обязательно для заполнения'
    },
    url: {
      message: 'Полу "Портфолио" должно быть ссылкой'
    }
  },
  telegram: {
    required: {
      message: 'Поле "Ник в телеграм" обязательно для заполнения'
    },
    telegramNick: {
      message: 'Поле "Ник в телеграм" некорректно'
    }
  }
}
