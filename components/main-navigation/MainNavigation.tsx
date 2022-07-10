import React from 'react'
import Link from '@mui/material/Link'
import Box from '@mui/material/Box'
import { navLinks } from '../../utils/NavLinks'
const MainNavigation = () => {
  return (
    <Box sx={{ textAlign: 'center' }}>
      {navLinks.map((item) => (
        <Link
          key={item.id}
          href={item.path}
          variant="body1"
          sx={{
            p: 4,
            color: 'gray',
            fontWeight: 'bold',
            textDecoration: 'none',
            '&:hover': {
              color: 'silver',
            },
          }}
        >
          {item.name}
        </Link>
      ))}
    </Box>
  )
}

export default MainNavigation
