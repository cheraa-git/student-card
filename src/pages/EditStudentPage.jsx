import {EditStudentForm} from "../components/ui/forms/EditStudentForm"
import PropTypes from "prop-types"

export const EditStudentPage = ({mode}) => {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-8 offset-md-2 shadow p-4">
          <h1>{mode === 'create' ? 'Создать' : 'Редактировать'}</h1>
          <EditStudentForm mode={mode}/>
        </div>
      </div>
    </div>
  )
}

EditStudentPage.propTypes = {
  mode: PropTypes.string.isRequired
}
