"use client";

import React from 'react';
import {
  Box,
  Typography,
  IconButton,
  Divider,
  Container,
} from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
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
            justifyContent: 'space-between',
            gap: 4,
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
              <Typography variant="h6" gutterBottom>Company</Typography>
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
              <Typography variant="h6" gutterBottom>Quick Links</Typography>
              {['Offers', 'Our Projects', 'Packages', 'Services'].map((item) => (
                <Typography key={item} variant="body2" sx={{ mb: 2 }}>
                  <Link href="#" underline="hover" color="inherit">{item}</Link>
                </Typography>
              ))}
            </Box>

            <Box>
              <Typography variant="h6" gutterBottom>Reach Us</Typography>
              <Typography variant="body2" sx={{ mb: 2 }}>No: 007, New Address,</Typography>
              <Typography variant="body2" sx={{ mb: 2 }}>Old Country, India</Typography>
              <Typography variant="body2" sx={{ mb: 2 }}>+91 938 098 8205</Typography>
              <Typography variant="body2" sx={{ mb: 2 }}>+91 636 960 7513</Typography>
            </Box>

            <Box>
              <Typography variant="h6" gutterBottom>Follow Us</Typography>
              <Box sx={{ display: 'flex', flexDirection: { xs: 'row', md: "column", sm: "column" }, gap: 1 }}>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <IconButton color="error" href="#" aria-label="LinkedIn">
                    <LinkedInIcon />
                  </IconButton>
                  LinkedIn
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <IconButton color="error" href="#" aria-label="Facebook">
                    <FacebookIcon />
                  </IconButton>
                  Facebook
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <IconButton color="error" href="#" aria-label="Instagram">
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
