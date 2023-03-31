import {useEffect, useState} from "react"
import {validator} from "../utils/validator/validator"

export const useValidateForm = (validatorConfig, initState) => {
  const [fields, setFields] = useState(initState)
  const [errors, setErrors] = useState({})
  const isValid = Object.keys(errors).length === 0

  useEffect(() => {
    setErrors(validator(fields, validatorConfig))
  }, [fields, validatorConfig])

  return {fields, setFields, errors, isValid}
}

