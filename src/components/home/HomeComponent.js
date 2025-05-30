import React from 'react';
import { Box, Typography } from '@mui/material';
import HomeSliderComponent from './HomeSliderComponent';
import WelcomeComponent from './WelcomeComponent';
import RecentProjectsComponent from './RecentProjectsComponent';
import SpecializationComponent from './SpecializationComponent';
import ContactInfoComponent from './ContactInfoComponent';

export default function HomeComponent() {
  return (
    <Box>
      {/* Home Slider Section */}
      <Box sx={{ padding: "0 15px" }}>
        <Box sx={{
          backgroundImage: 'url("/images/bg-services.png")',
          backgroundSize: 'cover', backgroundPosition: 'center', backgroundColor: "#000"
        }}>
          <HomeSliderComponent />
        </Box>
      </Box>

      <WelcomeComponent />

      <RecentProjectsComponent />

      <ContactInfoComponent />

      <SpecializationComponent />
    </Box>
  );
}
