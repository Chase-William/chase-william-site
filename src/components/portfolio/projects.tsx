'use client'

import { Card, CardContent, Divider, CardMedia, CardHeader, Stack, useMediaQuery, Icon, IconButton, Typography } from "@mui/material";
import Image from "next/image";
import GitHubIcon from '@mui/icons-material/GitHub'

type Project = {
  name: string
  description: string
  github: string
  icon: string
}

function createData(
  name: string,
  description: string,
  github: string,
  icon: string
) {
  return { name, description, github, icon }
}

const rows = [
  createData('BlueQuery', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', 'https://github.com/Chase-William/BlueQuery', '/images/projects/bluequery.png'),
  createData('BlueQuery', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', 'https://github.com/Chase-William/BlueQuery', '/images/projects/bluequery.png'),
  createData('BlueQuery', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', 'https://github.com/Chase-William/BlueQuery', '/images/projects/bluequery.png')
];

export default function Projects() {
  return (
    <>
      <Typography variant="h4">Projects</Typography>
      <Divider />
      <Stack>
        {rows.map(row => {
          return (
            <ProjectCard key={row.name} project={row} />
          )
        })}
      </Stack>
    </>
  )
}

function ProjectCard({ project }: { project: Project }) {
  return (
    // Main container
    // Change flex mode based off screen width
    <div className='flex flex-wrap lg:flex-nowrap mt-4'>
      {/* Container for image */}
      <div className="flex justify-center max-lg:w-full max-lg:mb-4 lg:mr-4">
        <Image
          className="rounded m-auto"
          style={{
            minWidth: '200px',
            maxWidth: '200px'
          }}
          width={200}
          height={200}
          alt={`Project icon for project ${project.name}.`}
          src={project.icon} />
      </div>
      <Card>
        <div>
          <div className="flex flex-wrap justify-between items-center">
            <CardHeader title={project.name} />
            <IconButton className="mr-3" onClick={() => window.open(project.github)}>
              <GitHubIcon />
            </IconButton>
          </div>
          <CardContent>
            {project.description}
          </CardContent>
        </div>
      </Card>
    </div>

  )
}