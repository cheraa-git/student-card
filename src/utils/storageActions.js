export const setStudent = (data) => {
  localStorage.setItem('student', JSON.stringify(data))
  return data
}

export const getStudent = () => {
  const data = localStorage.getItem('student')
  return JSON.parse(data)
}
