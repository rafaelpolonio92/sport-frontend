import React from 'react';
import MediaCard from '../Cards';
import { Grid, Box, Container } from '@mui/material';
import { drawerWidth } from '../Sidebar/styles';

const cards = [
  {
    title: 'Card Title 1',
    description: 'Card description 1',
    imageUrl: '/49ea5d387a6e396de24cb831f23c3cbd.jpg',
  },
  {
    title: 'Card Title 1',
    description: 'Card description 1',
    imageUrl: '/49ea5d387a6e396de24cb831f23c3cbd.jpg',
  },
  {
    title: 'Card Title 1',
    description: 'Card description 1',
    imageUrl: '/49ea5d387a6e396de24cb831f23c3cbd.jpg',
  },
  {
    title: 'Card Title 2',
    description: 'Card description 2',
    imageUrl: '/born-to-skate-skateboard-design-vintage-retro-vector.jpg',
  },
  // Add more card objects here
];


const Dashboard = (props) => {
  const { open } = props;
  return (
    <Box component="main" sx={{ flexGrow: 1, p: 3, paddingLeft: open ? drawerWidth + 3 : 3 }}>
      <Container style={{ marginTop: 220 }}>
        <Grid container spacing={3} alignItems="center">
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