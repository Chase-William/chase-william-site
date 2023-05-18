export default interface Experience {
  title: string
  description: string
  employer: string
  startDate: string
  endDate: string
}

export function experience(
  title: string,
  description: string,
  employer: string,
  startDate: string,
  endDate: string
) {
  return { title, description, employer, startDate, endDate }
}