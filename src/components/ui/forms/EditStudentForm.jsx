import {TextField} from "../../common/formFields/TextField"
import {useValidateForm} from "../../../hooks/validateFormHook"
import {editStudentValidatorConfig} from "../../../utils/validator/validatorConfigs"
import PropTypes from "prop-types"
import {NavLink, useHistory} from "react-router-dom"
import {getStudent, setStudent} from "../../../utils/storageActions"
import {useEffect} from "react"

export const EditStudentForm = ({mode}) => {
  const history = useHistory()
  const {fields, setFields, errors, isValid} = useValidateForm(editStudentValidatorConfig, {
    name: '', lastName: '', birth: '', portfolioUrl: '', telegram: ''
  })

  useEffect(() => {
    if (mode === 'edit') {
      const student = getStudent()
      if (!student) return
      setFields(student)
    }
  }, [mode, setFields])

  const handleChange = (target) => {
    setFields(prev => ({...prev, [target.name]: target.value}))
  }

  const handleSubmit = () => {
    if (isValid) {
      setStudent(fields)
      alert('Обновлено!')
      history.push('/')
    }
  }


  return (
    <div>
      <TextField
        name="name"
        onChange={handleChange}
        value={fields.name}
        error={errors.name}
        label="Имя"
      />
      <TextField
        name="lastName"
        onChange={handleChange}
        value={fields.lastName}
        error={errors.lastName}
        label="Фамилия"
      />
      <TextField
        name="birth"
        type="number"
        onChange={handleChange}
        value={fields.birth}
        error={errors.birth}
        label="Год рождения"
      />
      <TextField
        name="portfolioUrl"
        onChange={handleChange}
        value={fields.portfolioUrl}
        error={errors.portfolioUrl}
        label="Портфолио"
      />
      <TextField
        name="telegram"
        onChange={handleChange}
        value={fields.telegram}
        error={errors.telegram}
        label="Ник в телеграм"
      />
      {
        mode === 'create' ?
          <button className="btn btn-primary" disabled={!isValid} onClick={handleSubmit}>
            Создать
          </button>
          :
          <div>
            <NavLink to="/">
              <button className="btn btn-dark me-2">
                Назад
              </button>
            </NavLink>
            <button className="btn btn-primary" disabled={!isValid} onClick={handleSubmit}>
              Обновить
            </button>
          </div>
      }
    </div>
  )
}

EditStudentForm.propTypes = {
  mode: PropTypes.string.isRequired
}
