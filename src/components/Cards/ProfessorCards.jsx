import React, { useState } from 'react';
import { CardContent, CardMedia, Typography, CardActions, Button, Modal, Box } from '@mui/material';
import { WhiteCard } from './styles';

const ProfessorCard = ({ title, description, imageUrl, videoUrl }) => {
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
          <Box style={{ height: '130px', overflow: 'hidden' }}>
              <Typography variant="body2" color="text.secondary" sx={{ color: '#00000', fontWeight: 'bold' }}>
              {description}
              </Typography>
          </Box>
        </CardContent>
        <CardActions>
          <Button variant="contained" size="small" onClick={() => console.log('rafael')} >Learn More</Button>
        </CardActions>
    </WhiteCard>
  )
}

export default ProfessorCard;