import * as React from 'react';
import { useState } from 'react';
import TopHeadlines from './topHeadlines';
import BasicTimeline from './timeline';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import  Button  from '@mui/material/Button';
import './hero.css';
import { shadows } from '@mui/system';


function HeroSlide() {
 

  return (
    <div>
    <Box>
    <BasicTimeline />
    </Box>
    </div>
  );
}

export default HeroSlide;
