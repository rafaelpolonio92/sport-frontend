import React from 'react';
import { CardActionArea, CardContent, CardMedia, Typography } from '@mui/material';
import { MatteBlackCard } from './styles';

const MediaCard = ({ title, description, imageUrl }) => (
  <MatteBlackCard sx={{ maxWidth: 345, borderRadius: '20px' }}>
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
        <Typography variant="body2" color="text.secondary" sx={{ color: '#fff', fontWeight: 'bold' }}>
          {description}
        </Typography>
      </CardContent>
    </CardActionArea>
  </MatteBlackCard>
);

export default MediaCard;