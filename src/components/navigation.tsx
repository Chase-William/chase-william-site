'use client'

import { Link } from "@mui/material"

export default function Navigation() {
  return (
    <div
      style={{ 
        height: '50px'
      }}
      className="flex items-center shadow-md">
      <Link
        style={{
          marginLeft: '10px'
        }}
        component='button'
        href="/">
        Home
      </Link>
    </div>
  )
}