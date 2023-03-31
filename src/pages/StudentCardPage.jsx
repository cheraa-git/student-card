import {NavLink} from "react-router-dom"
import {StudentInfo} from "../components/ui/StudentInfo"
import {useEffect, useState} from "react"
import {getStudent} from "../utils/storageActions"

export const StudentCardPage = () => {
  const [student, setStudent] = useState(null)

  useEffect(() => {
    setStudent(getStudent())
  }, [])
  
  return (
    <div>
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-8 offset-md-2 shadow p-4">
            <h1>Карточка студента</h1>
            {
              student ?
                <>
                  <StudentInfo student={student}/>
                  <NavLink className="btn btn-primary" to="/edit">Редактировать</NavLink>
                </>
                :
                <>
                  <p>Нет данных</p>
                  <NavLink className="btn btn-primary" to="/create">Добавить</NavLink>
                </>
            }
          </div>
        </div>
      </div>
    </div>
  )
}
