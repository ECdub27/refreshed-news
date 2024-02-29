import * as React from 'react';
import { useState } from 'react';
import TopHeadlines from './topHeadlines';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';



function HeroSlide() {
 

  return (
    <div>
    <Box>
    <TopHeadlines />
    </Box>
    </div>
  );
}

export default HeroSlide;
