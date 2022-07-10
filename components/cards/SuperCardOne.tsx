import React from 'react'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import { SupercardOneProps } from './SuperCardOne.types'

const SuperCardOne = (props: SupercardOneProps) => {
  const { title, image, imageAlt, description, buttonTitle } = props
  return (
    <Card
      sx={{
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
      }}
    >
      <CardMedia
        component="img"
        image={image}
        alt={imageAlt}
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: '0',
          height: '100%',
          width: '100%',
          objectFit: 'cover',
        }}
      />
      <CardContent sx={{ position: 'relative', zIndex: '2' }}>
        <Typography
          gutterBottom
          variant="h5"
          component="h5"
          data-testid="title"
        >
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" sx={{ color: 'black' }}>
          {buttonTitle}
        </Button>
      </CardActions>
    </Card>
  )
}

export default SuperCardOne
