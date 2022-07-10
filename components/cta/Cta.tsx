// Call to Action
import React from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

const Cta = () => {
  return (
    <Box>
      <Typography
        variant="h4"
        component="div"
        sx={{ textAlign: 'center', pt: 8 }}
      >
        Welcome
      </Typography>
      <Typography
        variant="body1"
        component="div"
        sx={{ textAlign: 'center', py: 4 }}
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </Typography>
    </Box>
  )
}

export default Cta
