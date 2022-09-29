export const getAge = (value = '') => {
  const [day, month, year] = value.split(' ')

  // @ts-ignore
  const birthday = new Date(year, month - 1, day - 1)
  // @ts-ignore
  const ageDifMs = Date.now() - birthday;
  const ageDate = new Date(ageDifMs)
  return Math.abs(ageDate.getUTCFullYear() - 1970);
}
