import React from 'react';
import MediaCard from '../Cards';
import { Grid, Box, Container } from '@mui/material';
import { drawerWidth } from '../Sidebar/styles';

const cards = [
  {
    title: 'Ollie',
    description: 'Card description 1',
    imageUrl: '/skateboard-trick-tipp-ollie.jpg',
  },
  {
    title: 'Test',
    description: 'Card description 1',
    imageUrl: '/49ea5d387a6e396de24cb831f23c3cbd.jpg',
  },
  {
    title: 'Kickflip',
    description: 'Card description 2',
    imageUrl: '/360_F_96346832_fm7HVHqQHnGpsArG2TigUUeEYPsOrRvN.jpg',
  },
  // Add more card objects here
];

const Dashboard = () => {
  return (
    <Box component="main" sx={{ flexGrow: 1, p: 3, paddingLeft: 30, backgroundColor: '#d0dff7', }}>
      <Container style={{ marginTop: drawerWidth }}>
        <Grid container spacing={3} justifyContent="center" alignItems="center">
          {cards.map((card, index) => (
              <Grid item key={index} xs={12} sm={6} md={4}>
                <MediaCard
                  title={card.title}
                  description={card.description}
                  imageUrl={card.imageUrl}
                />
              </Grid>
            ))}
        </Grid>
      </Container>
    </Box>
  )
}

export default Dashboard;