import React from 'react';
import MediaCard from '../Cards/TricksCards';
import ProfessorCard from '../Cards/ProfessorCards';
import { Grid, Box, Container, Typography } from '@mui/material';
import { drawerWidth } from '../Sidebar/styles';

const trickCards = [
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

const professorCards = [
  {
    title: 'Nyjah Huston',
    description: "Nijah",
    imageUrl: '/Nyjah-Huston-Olympic-Player-PNG-HD.png',
  },
  {
    title: 'Test',
    description: 'Card description 1',
    imageUrl: '/Nyjah-Huston-Olympic-Player-PNG-HD.png',
  },
  {
    title: 'Kickflip',
    description: "The kickflip is a skateboarding trick, in which the rider flips their skateboard 360° along the axis that extends from the nose to the tail of the deck. When the rider is regular footed the board spins counter-clockwise if viewed from the side.",
    imageUrl: '/Nyjah-Huston-Olympic-Player-PNG-HD.png',
  },
  // Add more card objects here
];

const Dashboard = () => {
  return (
    <>
      <Box 
        component="main" 
        sx={{ 
          flexGrow: 1,
          p: 3,
          marginLeft: 30
        }}>
        <Container style={{ marginTop: drawerWidth }}>
          <Typography 
            variant="h1" 
            style={{ 
              fontFamily: 'Anton, sans-serif',
              fontSize: '70px', 
              textAlign: 'center' 
            }}>
            IMPROVE YOUR SKATEBOARDING
          </Typography>
        </Container>
      </Box>
      <Box 
        component="main" 
        sx={{ 
          flexGrow: 1, 
          p: 3, 
          marginLeft: 30
        }}>
        <Container>
          <Grid container spacing={3}>
            {trickCards.map((card, index) => (
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
      <Box 
        component="main" 
        sx={{ 
          flexGrow: 1,
          p: 3,
          marginLeft: 30
        }}>
        <Container style={{ marginTop: 50 }}>
          <Typography 
            variant="h1" 
            style={{ 
              fontFamily: 'Anton, sans-serif',
              fontSize: '70px', 
              textAlign: 'center' 
            }}>
            LEARN FROM THE BESTS
          </Typography>
        </Container>
      </Box>
      <Box 
        component="main" 
        sx={{ 
          flexGrow: 1, 
          p: 3, 
          marginLeft: 30
        }}>
        <Container>
          <Grid container spacing={3}>
            {professorCards.map((card, index) => (
                <Grid item key={index} xs={12} sm={6} md={4}>
                  <ProfessorCard
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
    </>
  )
}

export default Dashboard;