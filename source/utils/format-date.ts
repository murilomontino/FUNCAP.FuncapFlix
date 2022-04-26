export const FormatDate = (dataExame: Date) => {
  const date =
    dataExame.getDate() < 10 ? `0${dataExame.getDate()}` : dataExame.getDate()
  const newMouth = dataExame.getMonth() + 1
  const mouth = newMouth < 10 ? `0${newMouth}` : newMouth
  const year = dataExame.getFullYear()
  return date + '/' + mouth + '/' + year
}

export default FormatDate
