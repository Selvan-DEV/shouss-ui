"use client";

import React, { useEffect, useState } from 'react';
import { Box } from '@mui/material';
import HomeSliderComponent from './HomeSliderComponent';
import WelcomeComponent from './WelcomeComponent';
import RecentProjectsComponent from './RecentProjectsComponent';
import SpecializationComponent from './SpecializationComponent';
import ContactInfoComponent from './ContactInfoComponent';
import ContactModalComponent from './ContactModalComponent';

export default function HomeComponent() {
  const [isContactFormOpen, setContactFormOpen] = useState(false);

  useEffect(() => {
    const isContactUsShowed = sessionStorage.getItem("isContactUsShowed");
    if (!isContactUsShowed) {
      setContactFormOpen(true);
    }
  }, [])

  const handleClose = () => {
    sessionStorage.setItem("isContactUsShowed", true);
    setContactFormOpen(false);
  };

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

      <ContactModalComponent isContactFormOpen={isContactFormOpen} handleClose={handleClose} />
    </Box>
  );
}
