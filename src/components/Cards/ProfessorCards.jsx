import React, { useState } from 'react';
import { CardContent, CardMedia, Typography, CardActions, Button, Modal, Box } from '@mui/material';
import { WhiteCard } from './styles';

const ProfessorCard = ({ title, description, imageUrl, videoUrl }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState('');

  const handleModalOpen = (videoUrl) => {
    setSelectedVideo(videoUrl);
    setModalOpen(true)
  }

  const handleModalClose = () => {
    setModalOpen(false)
  }

  console.log(modalOpen)
  return (
    <WhiteCard sx={{ maxWidth: 345, borderRadius: '11px' }}>
        <CardMedia
        component="img"
        alt={title}
        height="240"
        image={imageUrl}
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
          <Button variant="contained" size="small" onClick={() => handleModalOpen(videoUrl)} >Learn More</Button>
        </CardActions>
    </WhiteCard>
  )
}

export default ProfessorCard;