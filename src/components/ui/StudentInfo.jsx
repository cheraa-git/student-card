import PropTypes from "prop-types"

export const StudentInfo = ({student}) => {

  const getAge = () => {
    const years = String(new Date().getFullYear() - Number(student.birth))
    if (!years) return ''
    let lastNumb
    if (years.at(-2) === '1')
      lastNumb = Number(`${years.at(-2) ?? ''}${years.at(-1) ?? ''}`)
    else
      lastNumb = Number(years.at(-1))
    if (lastNumb === 1) return `(${years} год)`
    if (lastNumb > 1 && lastNumb < 5) return `(${years} года)`
    return `(${years} лет)`
  }

  return (
    <div className="">
      <p><b>Имя:</b> {student.name}</p>
      <p><b>Фамилия:</b> {student.lastName}</p>
      <p><b>Год рождения:</b> {student.birth} {getAge()}</p>
      <p><b>Портфолио:</b> <a href={student.portfolioUrl}>{student.portfolioUrl}</a></p>
      <p><b>Телеграм:</b> <a href={`https://t.me/${student.telegram.slice(1)}`}>{student.telegram}</a></p>
    </div>
  )
}

StudentInfo.propTypes = {
  student: PropTypes.object
}
