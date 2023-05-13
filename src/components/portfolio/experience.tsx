'use client'

import { Divider, Typography } from "@mui/material"

type JobExperience = {
  title: string
  description: string
  employer: string
  startDate: string
  endDate: string
}

function createData(
  title: string,
  description: string,
  employer: string,
  startDate: string,
  endDate: string
) {
  return { title, description, employer, startDate, endDate }
}

const rows = [
  createData('HoloLens 2 App Developer', 'Research and develop technologies to integrate interpreting & captioning services into the HoloLens 2 space.', 'Rochester Institute of Technology, NTID Research Center on Culture and Language', 'May 26', 'May 14'),
  createData('HoloLens 2 App Developer', 'Research and develop technologies to integrate interpreting & captioning services into the HoloLens 2 space.', 'Rochester Institute of Technology, NTID Research Center on Culture and Language', 'May 26', 'May 14'),
  createData('HoloLens 2 App Developer', 'Research and develop technologies to integrate interpreting & captioning services into the HoloLens 2 space.', 'Rochester Institute of Technology, NTID Research Center on Culture and Language', 'May 26', 'May 14'),
  createData('HoloLens 2 App Developer', 'Research and develop technologies to integrate interpreting & captioning services into the HoloLens 2 space.', 'Rochester Institute of Technology, NTID Research Center on Culture and Language', 'May 26', 'May 14'),
]

export default function Experience() {
  return (
    <div>
      <Typography variant="h4">Experience</Typography>
      <Divider />
      {rows.map(row => <ExperienceCard key={row.title} experience={row} />)}
    </div>
  )
}

function ExperienceCard({ experience }: { experience: JobExperience }) {
  return (
    <div className="mt-4">
      <Typography variant="h5">
        {experience.title}
      </Typography>
      <Typography>
        {experience.employer}
      </Typography>
      <Typography>
        {experience.description}
      </Typography>
    </div>
  )
}