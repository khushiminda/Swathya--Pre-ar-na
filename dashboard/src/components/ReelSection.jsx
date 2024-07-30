import React from 'react';
import SwipeableViews from 'react-swipeable-views';
import { bindKeyboard } from 'react-swipeable-views-utils';
import { Button, Box, Typography } from '@mui/material';
import localVideo1 from '../assets/WhatsApp Video 2024-07-15 at 13.50.00.mp4';
import localVideo2 from "../assets/WhatsApp Video 2024-07-15 at 15.44.05.mp4";
import localVideo3 from "../assets/WhatsApp Video 2024-07-15 at 15.44.09.mp4"



const EnhancedSwipeableViews = bindKeyboard(SwipeableViews);

const SwipeableVideos = () => {
  return (
   
    <Box>
    <Typography variant="h1" align="center" gutterBottom>
      Surgical Training
    </Typography>
    <EnhancedSwipeableViews>
      {/* Your swipeable content will go here */}
    </EnhancedSwipeableViews>
  </Box>
  );
};

export default SwipeableVideos;
