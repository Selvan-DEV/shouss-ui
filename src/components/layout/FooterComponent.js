"use client";

import React from 'react';
import {
  Box,
  Typography,
  IconButton,
  Divider,
  Container,
} from '@mui/material';
import YouTubeIcon from '@mui/icons-material/YouTube';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import Image from 'next/image';
import CustomButton from '../custom-button/CustomButton';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

const FooterComponent = () => {
  const router = useRouter();
  return (
    <Box sx={{ bgcolor: '#000000', color: '#fff', py: 6 }}>
      <Container>
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            justifyContent: 'space-around',
            gap: 2,
            flexWrap: 'wrap',
          }}
        >
          {/* Left: Logo and Quote Button */}
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: { xs: 'center', md: 'flex-start' },
              textAlign: { xs: 'center', md: 'left' },
              gap: 2,
            }}
          >
            <Image src="/logo/logo.png" alt="logo" width={200} height={47} priority />
            <Typography variant="subtitle1" sx={{ fontSize: '18px', fontWeight: 600 }}>
              Top-Rated Home Builders in Bengaluru
            </Typography>
            <CustomButton onClick={() => router.push('/contact')} name="Get a Quote" width="184px" />
          </Box>

          {/* Middle: Links */}
          <Box
            sx={{
              display: 'flex',
              justifyContent: { md: 'space-between', xs: "center", sm: "center" },
              gap: 4,
              flexWrap: "wrap"
            }}
          >
            <Box>
              <Typography variant="h6" gutterBottom>Quick Links</Typography>
              {[
                { page: "Home", url: "/" },
                { page: "About Us", url: "/about" },
                { page: "Services", url: "/services" },
                { page: "Packages", url: "/packages" },
              ].map((item) => (
                <Typography key={item.url} variant="body2" sx={{ mb: 2 }}>
                  <Link href={item.url} underline="hover" color="inherit">{item.page}</Link>
                </Typography>
              ))}
            </Box>

            <Box>
              <Typography variant="h6" gutterBottom>Reach Us</Typography>
              <Typography variant="body2" sx={{ mb: 2 }}>164, 1st Cross Rd, Judicial Colony</Typography>
              <Typography variant="body2" sx={{ mb: 2 }}>AECS Layout 1st Stage, Sanjayanagara</Typography>
              <Typography variant="body2" sx={{ mb: 2 }}>Bengaluru, Karnataka-560094</Typography>
              <Typography variant="body2" sx={{ mb: 2 }}>+91 938 098 8205</Typography>
              <Typography variant="body2" sx={{ mb: 2 }}>+91 636 960 7513</Typography>
            </Box>

            <Box>
              <Typography variant="h6" gutterBottom>Follow Us</Typography>
              <Box sx={{ display: 'flex', flexDirection: { xs: 'row', md: "column", sm: "column" }, gap: 1 }}>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <IconButton color="error" href="https://www.youtube.com/@shoussdesignandbuild" target='_blank' aria-label="LinkedIn">
                    <YouTubeIcon />
                  </IconButton>
                  YouTube
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <IconButton color="error" href="https://www.facebook.com/profile.php?id=61576918063251" target='_blank' aria-label="Facebook">
                    <FacebookIcon />
                  </IconButton>
                  Facebook
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <IconButton color="error" href="https://www.instagram.com/shouss_design_build?igsh=aG1oNzg4a2ZpbnBj" target='_blank' aria-label="Instagram">
                    <InstagramIcon />
                  </IconButton>
                  Instagram
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Container>

      {/* Divider */}
      <Divider
        orientation="horizontal"
        sx={{
          borderColor: 'var(--app-primary-color)',
          my: 4,
        }}
      />

      {/* Bottom Bar */}
      <Container>
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            justifyContent: 'space-between',
            alignItems: 'center',
            textAlign: 'center',
            gap: 1,
          }}
        >
          <Typography variant="body2">© sHouss all rights reserved.</Typography>
          <Typography variant="body2">
            Bengaluru’s Trusted Name in Home Construction
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default FooterComponent;
