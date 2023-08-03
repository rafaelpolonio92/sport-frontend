import React, { useState } from 'react';
import { CardContent, CardMedia, Typography, CardActions, Button, Modal, Box, Rating, Link, IconButton } from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';

import { WhiteCard } from './styles';

const ProfessorCard = ({ title, description, imageUrl, videoUrl, rating }) => {
  return (
    <WhiteCard sx={{ maxWidth: 345, borderRadius: '11px' }}>
        <CardMedia
          component="img"
          alt={title}
          height="240"
          image={imageUrl}
          style={{ objectFit: 'cover', objectPosition: 'center 1.5%' }}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" sx={{ color: '#00000', fontWeight: 'bold' }}>
              {title}
          </Typography>
          <Box style={{ height: '50px', overflow: 'hidden' }}>
              <Typography variant="body2" color="text.secondary" sx={{ color: '#00000', fontWeight: 'bold' }}>
              {description}
              </Typography>
          </Box>
        </CardContent>
        <CardActions>
        </CardActions>
        <CardActions sx={{justifyContent: 'space-between'}}>
          <Link href="https://www.instagram.com/nyjah/?hl=en" target="_blank" rel="noopener noreferrer">
            <IconButton>
              <InstagramIcon />
              <Typography variant='h6' component='span' sx={{marginLeft: 1}}>@nyjah</Typography>
            </IconButton>
          </Link>
          <Rating
              name="text-feedback"
              value={rating}
              readOnly
              precision={0.5}
            />
            {/* <Button variant="contained" size="small" onClick={() => console.log('rafael')} >Learn More</Button> */}
          </CardActions>
    </WhiteCard>
  )
}

export default ProfessorCard;