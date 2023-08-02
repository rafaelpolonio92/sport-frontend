import React, { useState } from 'react';
import MediaCard from '../Cards';
import { Grid, Box, Container } from '@mui/material';
import { drawerWidth } from '../Sidebar/styles';

const cards = [
  {
    title: 'Ollie',
    description: "The ollie is a skateboarding trick where the rider and board leap into the air without the use of the rider's hands. It is the combination of stomping, also known as popping, the tail of the skateboard off the ground to get the board mostly vertical, jumping, and sliding the front foot forward to level out the skateboard at the peak of the jump.",
    imageUrl: '/skateboard-trick-tipp-ollie.jpg',
    videoUrl: 'https://www.youtube.com/embed/Jig3uiYsb4w'
  },
  {
    title: 'Test',
    description: 'Card description 1',
    imageUrl: '/49ea5d387a6e396de24cb831f23c3cbd.jpg',
  },
  {
    title: 'Kickflip',
    description: "The kickflip is a skateboarding trick, in which the rider flips their skateboard 360° along the axis that extends from the nose to the tail of the deck. When the rider is regular footed the board spins counter-clockwise if viewed from the side.",
    imageUrl: '/360_F_96346832_fm7HVHqQHnGpsArG2TigUUeEYPsOrRvN.jpg',
  },
  // Add more card objects here
];

const Dashboard = () => {
  return (  
    <Box component="main" sx={{ flexGrow: 1, p: 3, backgroundColor: '#d0dff7', }}>
      <Container style={{ marginTop: drawerWidth }}>
        <Grid container spacing={3}>
          {cards.map((card, index) => (
              <Grid item key={index} xs={12} sm={6} md={4}>
                <MediaCard
                  title={card.title}
                  description={card.description}
                  imageUrl={card.imageUrl}
                  videoUrl={card.videoUrl}
                />
              </Grid>
            ))}
        </Grid>
      </Container>
    </Box>
  )
}

export default Dashboard;