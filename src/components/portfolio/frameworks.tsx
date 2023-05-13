'use client'

import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Link, useMediaQuery, AccordionSummary, Typography, AccordionDetails, Accordion } from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

function createData(
  framework: string,
  description: string,
  languages: Array<{ name: string }>,
  projects: Array<{
    name: string,
    url: string
  }>
) {
  return { framework, description, languages, projects }
}

const rows = [
  createData('.NET 7', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', [{ name: 'C#' }], [{ name: 'DotDocs', url: 'https://' }]),
  createData('.NET 7', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', [{ name: 'TypeScript' }, { name: 'JavaScript' }], [{ name: 'DotDocs', url: 'https://' }, { name: 'DotDocs', url: 'https://' }, { name: 'DotDocs', url: 'https://' }]),
  createData('.NET 7', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', [{ name: 'C#' }], [{ name: 'DotDocs', url: 'https://' }]),
  createData('.NET 7', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', [{ name: 'C#' }, { name: 'C#' }, { name: 'C#' }], [{ name: 'DotDocs', url: 'https://' }, { name: 'DotDocs', url: 'https://' }, { name: 'DotDocs', url: 'https://' }]),
  createData('.NET 7', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', [{ name: 'C#' }], [{ name: 'DotDocs', url: 'https://' }]),
];

export default function Frameworks() {
  const isDesktop = useMediaQuery('(min-width: 700px)')

  return (
    <div>
      <Typography variant="h4">Skills</Typography>
      {isDesktop
        ? FrameworksDesktop()
        : FrameworksMobile()
      }
    </div>
  )
}

function FrameworksDesktop() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Framework</TableCell>
            <TableCell>Languages</TableCell>
            <TableCell align="right">Description</TableCell>
            <TableCell align="left">Projects</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.framework}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.framework}
              </TableCell>
              <TableCell>
                <div style={{
                  display: 'flex',
                  flexWrap: 'wrap'
                }}>
                  {row.languages.map(v =>
                    <p
                      key={v.name}>
                      {v.name}&nbsp;
                    </p>)
                  }
                </div>
              </TableCell>
              <TableCell align="left">{row.description}</TableCell>
              <TableCell align="right">
                <div style={{
                  display: 'flex',
                  flexWrap: 'wrap'
                }}>
                  {row.projects.map(v =>
                    <Link
                      key={v.name} href={v.url}>
                      {v.name}
                    </Link>)
                  }
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

function FrameworksMobile() {
  return (
    <div>
      {rows.map(row => {
        return (
          <Accordion key={row.framework}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>{row.framework}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <div style={{
                display: 'flex',
                flexWrap: 'wrap',
                marginBottom: '25px'
              }}>
                {row.languages.map(v =>
                  <p
                    key={v.name}>
                    {v.name}&nbsp;
                  </p>)
                }
              </div>
              <Typography>
                {row.description}
              </Typography>
              {row.projects.map(v =>
                <>
                  <Link
                    key={v.name} href={v.url}>
                    {v.name}
                  </Link>
                  &nbsp;
                </>)
              }
            </AccordionDetails>
          </Accordion>
        )
      })}
    </div>
  )
}