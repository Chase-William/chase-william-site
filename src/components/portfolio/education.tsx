'use client'

import { Typography, Divider } from "@mui/material";

export default function Education() {
  return (
    <div>
      <Typography variant="h4">Education</Typography>
      <Divider />
      <div>
        <Typography variant="h5">
          Rochester Institute of Technology
        </Typography>
        <Typography>
          Bachelor of Science in Web & Mobile Computing
        </Typography>
        <Typography>
          Spring 23
        </Typography>
      </div>
      <div className="mt-4">
        <Typography variant="h5">
          National Technical Institute of the Deaf
        </Typography>
        <Typography>
          Associates of Science in Mobile Application Development
        </Typography>
        <Typography>
          Fall 21
        </Typography>
      </div>
    </div>
  )
}