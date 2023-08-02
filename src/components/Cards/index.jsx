import React, { useState } from 'react';
import { CardActionArea, CardContent, CardMedia, Typography, CardActions, Button, Modal, Box } from '@mui/material';
import { MatteBlackCard } from './styles';

const MediaCard = ({ title, description, imageUrl, videoUrl }) => {
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
  <MatteBlackCard sx={{ maxWidth: 345, borderRadius: '11px' }}>
    <CardActionArea>
      <CardMedia
        component="img"
        alt={title}
        height="240"
        image={imageUrl}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" sx={{ color: '#fff', fontWeight: 'bold' }}>
          {title}
        </Typography>
        <Box style={{ height: '130px', overflow: 'hidden' }}>
          <Typography variant="body2" color="text.secondary" sx={{ color: '#b5b3b3', fontWeight: 'bold' }}>
            {description}
          </Typography>
        </Box>
      </CardContent>
      <CardActions>
        <Button variant="contained" size="small" onClick={() => handleModalOpen(videoUrl)} >Learn More</Button>
      </CardActions>
    </CardActionArea>

    <Modal open={modalOpen} onClose={handleModalClose}>
        <Box
            sx={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              bgcolor: 'background.paper',
              outline: 'none',
            }}
          >
            <iframe
              width="660"
              height="415"
              src={selectedVideo + "?autoplay=1&mute=0"} // Adding autoplay and mute options
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </Box>
      </Modal>
  </MatteBlackCard>
  )
}

export default MediaCard;